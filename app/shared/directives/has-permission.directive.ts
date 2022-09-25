import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
  private _value: any;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private commonService: AuthenticationService
  ) {

  }

  @Input()
  set hasPermission(value) {
    this._value = value;
    this.updateView(this._value);
  }

  private updateView(value) {
    if (this.commonService.hasPermission(value)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnInit(): void {
  }
}
