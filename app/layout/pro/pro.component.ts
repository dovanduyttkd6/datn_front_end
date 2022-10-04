import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NavigationEnd, NavigationError, RouteConfigLoadStart, Router} from '@angular/router';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd';
import {updateHostClass} from '@delon/util';
import {MenuService, ScrollService, SettingsService} from '@delon/theme';
import {ReuseTabService} from '@delon/abc';

import {BrandService} from './pro.service';

import {NavigationService, UserRightService, UserService} from '../../services';

import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {ROLE_LIST} from "../../utils";

@Component({
  selector: 'layout-pro',
  templateUrl: './pro.component.html',
})
export class LayoutProComponent implements OnInit, AfterViewInit, OnDestroy {
  get isMobile() {
    return this.pro.isMobile;
  }

  get getLayoutStyle() {
    const {isMobile, fixSiderbar, collapsed, menu, width, widthInCollapsed} = this.pro;
    if (fixSiderbar && menu !== 'top' && !isMobile) {
      return {
        paddingLeft: (collapsed ? widthInCollapsed : width) + 'px',
      };
    }
    return null;
  }

  get getContentStyle() {
    const {fixedHeader, headerHeight} = this.pro;
    return {
      margin: '24px 24px 0',
      'padding-top': (fixedHeader ? headerHeight : 0) + 'px',
    };
  }

  private get body(): HTMLElement {
    return this.doc.body;
  }

  constructor(
    bm: BreakpointObserver,
    mediaMatcher: MediaMatcher,
    private router: Router,
    msg: NzMessageService,
    scroll: ScrollService,
    reuseTabSrv: ReuseTabService,
    private resolver: ComponentFactoryResolver,
    private el: ElementRef,
    private renderer: Renderer2,
    public pro: BrandService,
    private menuSrv: MenuService,
    private navigationService: NavigationService,
    private userService: UserService,
    private userRightService: UserRightService,
    private settings: SettingsService,
    @Inject(DOCUMENT) private doc: any, // private cdr: ChangeDetectorRef
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private authenticateService: AuthenticationService,
  ) {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        scroll.scrollToTop();
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        msg.error(`Can't load ${evt.url} routing`, {nzDuration: 1000 * 3});
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
      // If have already cached router, should be don't need scroll to top
      if (!reuseTabSrv.exists(evt.url)) {
        scroll.scrollToTop();
      }
    });

    // media
    const query = {
      'screen-xs': '(max-width: 575px)',
      'screen-sm': '(min-width: 576px) and (max-width: 767px)',
      'screen-md': '(min-width: 768px) and (max-width: 991px)',
      'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
      'screen-xl': '(min-width: 1200px)',
    };
    bm.observe([
      '(min-width: 1200px)',
      '(min-width: 992px) and (max-width: 1199px)',
      '(min-width: 768px) and (max-width: 991px)',
      '(min-width: 576px) and (max-width: 767px)',
      '(max-width: 575px)',
    ]).subscribe(() => {
      this.queryCls = Object.keys(query).find(key => mediaMatcher.matchMedia(query[key]).matches);
      this.setClass();
    });
  }

  private unsubscribe$ = new Subject<void>();
  private queryCls: string;
  @ViewChild('settingHost', {read: ViewContainerRef, static: false}) private settingHost: ViewContainerRef;

  isFetching = false;

  listUrlAllow: string[] = [];

  private setClass() {
    const {body, renderer, queryCls, pro} = this;
    updateHostClass(body, renderer, {
      ['color-weak']: pro.layout.colorWeak,
      [`layout-fixed`]: pro.layout.fixed,
      [`aside-collapsed`]: pro.collapsed,
      ['alain-pro']: true,
      [queryCls]: true,
      [`alain-pro__content-${pro.layout.contentWidth}`]: true,
      [`alain-pro__fixed`]: pro.layout.fixedHeader,
      [`alain-pro__wide`]: pro.isFixed,
      [`alain-pro__dark`]: pro.theme === 'dark',
      [`alain-pro__light`]: pro.theme === 'light',
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    const {pro, unsubscribe$} = this;
    pro.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => {
      this.setClass();
    });
    this.loadMenu();
  }

  ngOnDestroy() {
    const {unsubscribe$, body, pro} = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    body.classList.remove(
      `alain-pro__content-${pro.layout.contentWidth}`,
      `alain-pro__fixed`,
      `alain-pro__wide`,
      `alain-pro__dark`,
      `alain-pro__light`,
    );
  }

  loadMenu() {
    this.menuSrv.clear();

    // init menu
    const lstMenu2 = [];

    const dashboard = {
      name: 'Dashboard',
      code: 'menu.dashboard',
      iconClass: 'sidebar-menu-icon icon__catalog',
      urlRewrite: '',
      subChild: []
    }

    lstMenu2.push(dashboard);

    const quanlythuchi = {
      name: 'Quản lý thu chi',
      code: 'menu.thu-chi-management',
      iconClass: 'sidebar-menu-icon icon__admin',
      urlRewrite: '',
      subChild: []
    }

    quanlythuchi.subChild.push({
      name: 'Quản lý yêu cầu',
      code: 'menu.request-management',
      iconClass: 'sidebar-menu-icon icon__catalog',
      urlRewrite: 'catalog-management/request',
      subChild: [],
    })

    quanlythuchi.subChild.push({
      name: 'Quản lý đề xuất',
      code: 'menu.offer-management',
      iconClass: 'sidebar-menu-icon icon__catalog',
      urlRewrite: 'catalog-management/offer',
      subChild: [],
    })

    quanlythuchi.subChild.push({
      name: 'Import đề xuất',
      code: 'menu.import-excel-management',
      iconClass: 'sidebar-menu-icon icon__catalog',
      urlRewrite: 'catalog-management/excel',
      subChild: [],
    })

    quanlythuchi.subChild.push({
      name: 'Import file yêu cầu',
      code: 'menu.import-excelDR-management',
      iconClass: 'sidebar-menu-icon icon__catalog',
      urlRewrite: 'catalog-management/excelDR',
      subChild: [],
    })

    lstMenu2.push(quanlythuchi);

    const userManagement = {
      name: 'Quản lý tài khoản',
      code: 'menu.user-management',
      iconClass: 'sidebar-menu-icon icon__partner-profile',
      urlRewrite: 'catalog-management/user',
      subChild: []
    }

    lstMenu2.push(userManagement)

    const rootMenu = [
      {
        text: 'Trang chủ',
        i18n: 'menu.main',
        group: true,
        hideInBreadcrumb: true,
        children: this.initMenu(lstMenu2, ''),
      },
    ];
    this.menuSrv.add(rootMenu);
  }

  initMenu(navigation: any[], link: string):
    any[] {
    const length: number = navigation.length;
    const menu: any[] = [];
    let menuItem: any = {};

    for (let i = 0; i < length; i += 1) {
      menuItem = {
        text: navigation[i].name,
        i18n: navigation[i].code,
        icon: navigation[i].iconClass,
      };
      menuItem.link = link;
      if (
        navigation[i].urlRewrite !== null &&
        navigation[i].urlRewrite !== undefined &&
        navigation[i].urlRewrite !== ''
      ) {
        menuItem.link = link + '/' + navigation[i].urlRewrite;
      }
      if (
        navigation[i].subChild !== null &&
        navigation[i].subChild !== undefined &&
        navigation[i].subChild.length > 0
      ) {
        menuItem.children = this.initMenu(navigation[i].subChild, menuItem.link);
      }
      if (menuItem.link !== '') {
        this.listUrlAllow.push(menuItem.link);
      }
      menu.push(menuItem);
    }
    return menu;
  }
}
