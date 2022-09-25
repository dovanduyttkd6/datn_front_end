import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { APP_PARAMS_TYPE, REGEX, SCROLL_TABLE } from '../../../../utils';
import { AppParamsService } from '../../../../services/app-params/app-params.service';
import { BehaviorSubject, iif, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ToastService } from '@shared';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextComponent } from '../../../components/inputs/input-text/input-text.component';
import { ServerService } from 'src/app/services/server-management/server.service';
import { isBuffer } from 'util';
import { isThisSecond } from 'date-fns';

@Component({
  selector: 'app-detail-server',
  templateUrl: './detail-server.component.html',
  styleUrls: ['./detail-server.component.less'],
})
export class DetailServerComponent implements OnInit, AfterViewInit {
  @ViewChild('codeRef', { static: false }) codeRef: InputTextComponent;
  @ViewChild('nameRef', { static: false }) nameRef: InputTextComponent;
  @ViewChild('location', { static: false }) locationRef: InputTextComponent;
  breadcrumbs: any = [];
  SCROLL_TABLE = SCROLL_TABLE;
  isBreadcrumb;
  addForm: any;
  continueAdd: any = false;
  services: any;
  total: any = 0;
  os_ids: any;
  flavorIds: any;
  svServiceIds: any;
  storageIds: any;
  networkIds: any;
  groupIds: any;
  selectServiceModal: any = [];
  serviceModels: any[];
  lstDataMapping: any = [];
  searchService$ = new BehaviorSubject('');
  isSubmit: any = false;
  id: any;
  selectedService: any;
  selectedFlavor: any;
  selectedModel: any;
  data: any;
  isViewConfirmCancel: any;
  isEdit = false;
  viewVol1 = true;
  viewVol2 = true;
  viewVol3 = true;
  isMappingNull = false;
  code: any;
  volume = ['vol1', 'vol2', 'vol3'];
  countVol = 0;
  request: any = {
    page: 0,
    name: null,
    currentPage: 0,
    size: 10,
    sort: 'code',
  };

  constructor(
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private appParamService: AppParamsService,
    private serverService: ServerService,
    private toastService: ToastService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.appParamService.getAppParamsByType(APP_PARAMS_TYPE.SERVICE_STATUS).subscribe(res => {
      this.serviceModels = res.data;
    });
    console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : '1');
    this.id = this.activatedRouter.snapshot.params['id'];
    this.initSearchOs();
    this.fetchOs('');
    this.initSearchFlavor();
    this.fetchFlavor('');
    this.initSearchNetwork();
    this.fetchNetwork('');
    this.initSearchStorage();
    this.fetchStorage('');
    this.initSearchSvGroup();
    this.fetchSvGroup('');
    this.initSearchSvService();
    this.fetchSvService('');
    if (this.id) {
      this.isEdit = true;
      this.loadData(this.id);
      this.addForm.get('code').disable();
      console.log('IsEdit');
    }
    this.setBreadcrumb();
  }

  ngAfterViewInit() {
    if (this.id) {
      this.nameRef.focus();
    }
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      id: null,
      // code: new FormControl(null, [Validators.maxLength(500), Validators.pattern(REGEX.VALIDATE_CODE_NOT_SPACE)]),
      name: new FormControl(null, Validators.maxLength(500)),
      systemName: new FormControl(null, Validators.maxLength(500)),
      osId: new FormControl(null, Validators.maxLength(500)),
      svServiceId: new FormControl(null, Validators.maxLength(500)),
      flavorId: new FormControl(null, Validators.maxLength(500)),
      storageId: new FormControl(null, Validators.maxLength(500)),
      svGroupId: new FormControl(null, Validators.maxLength(500)),
      networkId: new FormControl(null, Validators.maxLength(500)),
      ip: new FormControl(null, Validators.maxLength(500)),
      vol1: new FormControl(null, Validators.maxLength(500)),
      vol2: new FormControl(null, Validators.maxLength(500)),
      vol3: new FormControl(null, Validators.maxLength(500)),
      notes: new FormControl(null, Validators.maxLength(500)),
    });
  }

  setBreadcrumb() {
    this.breadcrumbs = [
      {
        name: this.translateService.instant('breadcrumb.catalog-management'),
        route: '',
      },
      {
        name: this.translateService.instant('breadcrumb.vm-management'),
        route: '/catalog-management/server',
      },
      {
        name: this.translateService.instant(
          !this.isEdit ? 'breadcrumb.vm-management.add' : 'breadcrumb.vm-management.edit',
        ),
        route: '',
      },
    ];
    this.isBreadcrumb = true;
  }
  cancelConfirm() {
    if (this.data) {
      if (this.checkDataForm()) {
        this.isViewConfirmCancel = true;
      } else {
        this.cancel();
      }
    } else {
      if (this.getValueField('name')) {
        this.isViewConfirmCancel = true;
      } else this.cancel();
    }
  }

  cancel() {
    this.router.navigate(['/catalog-management/server']);
  }

  submitForm(checked: any) {
    this.isSubmit = true;
    for (const i in this.addForm.controls) {
      this.addForm.controls[i].markAsDirty();
      this.addForm.controls[i].updateValueAndValidity();
    }
    if (this.addForm.invalid) {
      const invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'));
      for (let i = 0; i < invalidFields.length; i++) {
        if (invalidFields[i].tagName.toLocaleUpperCase() === 'INPUT') {
          invalidFields[i].focus();
          break;
        }
      }
    }

    if (this.addForm.valid) {
      let fData = this.addForm.getRawValue();
      let data = {
        id: this.id,
        name: fData.name,
        systemName: fData.systemName,
        flavorId: fData.flavorId,
        storageId: fData.storageId,
        svServiceId: fData.svServiceId,
        svGroupId: fData.svGroupId,
        osId: fData.osId,
        networkId: fData.networkId,
        ip: fData.ip,
        vol1: fData.vol1,
        vol2: fData.vol2,
        vol3: fData.vol3,
        notes: fData.notes,
      };
      this.serverService.save(data).subscribe(res => {
        console.log(res);
        if (res) {
          if (!this.id) {
            if (res.data == '-2') {
              this.addForm.get('code').setErrors({ unique: true });
            } else {
              this.toastService.openSuccessToast(this.translateService.instant('catalog-management.vm.add.success'));
              if (!this.continueAdd) {
                this.cancel();
              } else {
                this.addForm.reset();
              }
            }
          } else {
            if (res.data != '1') {
              this.toastService.openErrorToast(
                this.translateService.instant('catalog-management.vm.delete.error', {
                  code: this.addForm.get('code').value,
                  srCode: res.data,
                }),
                null,
              );
            } else {
              this.toastService.openSuccessToast(this.translateService.instant('catalog-management.vm.update.success'));
              this.cancel();
            }
          }
        }
      });
    }
  }

  selectChangeService(event) {
    console.log(event);
    this.selectedService = event;
    if (event) {
      let ids = event.serviceModel.split(',');
      this.selectServiceModal = this.serviceModels.filter(x => ids.indexOf('' + x.value) > -1);
      this.addForm.get('serviceModel').patchValue(null);
    } else {
      this.addForm.get('serviceModel').patchValue(null);
    }
  }
  initSearchOs() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchOs(value);
    });
  }

  fetchOs(txtSearch) {

  }
  initSearchFlavor() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchFlavor(value);
    });
  }

  fetchFlavor(txtSearch) {

  }
  initSearchSvService() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchSvService(value);
    });
  }
  fetchSvService(txtSearch) {

  }

  initSearchStorage() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchStorage(value);
    });
  }

  fetchStorage(txtSearch) {

  }

  initSearchNetwork() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchNetwork(value);
    });
  }

  fetchNetwork(txtSearch) {

  }

  initSearchSvGroup() {
    const optionList$: Observable<any> = this.searchService$.asObservable().pipe(debounceTime(500));
    optionList$.subscribe(value => {
      this.fetchSvGroup(value);
    });
  }

  fetchSvGroup(txtSearch) {

  }

  loadData(id) {
    this.serverService.detail(id).subscribe(res => {
      this.data = res.data;

      // console.log(this.data.vol1, this.data.vol2, this.data.vol3);
      // console.log(this.data);
      // if(this.data.vol1 != null) {
      //   this.volume.push('vol1')
      // }
      // if(this.data.vol2 != null) {
      //   this.volume.push('vol2')
      // }
      // if(this.data.vol3 != null) {
      //   this.volume.push('vol3')
      // }
      // console.log(this.volume);
      // console.log(res.data);
      this.addForm.patchValue(this.data);
    });
  }

  createRange(number) {
    return new Array(number);
  }

  checkDataForm(): boolean {
    console.log(this.addForm.value);
    console.log(this.data);
    if (this.getValueField('name') != this.data.name) {
      return true;
    }
    return false;
  }

  onblurChange(event: any, place: any, type: any) {
    if (type === 2 && place.control.value) {
      place.control.patchValue(place.control.value.toUpperCase());
    }

    if (!event.target.value.match(REGEX.VALIDATE_CODE_NOT_SPACE)) {
      place.control.setErrors({ pattern: true });
      return;
    }
    if (!event.target.value) {
      place.control.setErrors({ required: true });
      return;
    }
    if (!event.target.value.match(REGEX.LIMIT) && type !== 1) {
      place.control.setErrors({ excelPattern: true });
      return;
    }
  }
  onCancelConfirm() {
    this.isViewConfirmCancel = false;
  }
  getValueField(item) {
    return this.addForm.get(item).value;
  }

  onCreateMapping() {
    this.lstDataMapping.push({ variableInventory: '', placeGNOC: '' });
    this.lstDataMapping = [...this.lstDataMapping];
    this.countVol += 1;
    console.log('====' + this.countVol.toString);
  }
  onDeleteMapping(index) {
    this.lstDataMapping.splice(index, 1);
    this.lstDataMapping = [...this.lstDataMapping];
    this.countVol -= 1;
    console.log('====' + this.countVol.toString);
  }
}
