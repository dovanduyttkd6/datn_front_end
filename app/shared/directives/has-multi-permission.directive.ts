import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Directive({
  selector: '[hasMultiPermission]'
})
export class HasMultiPermissionDirective implements OnInit {
  private _value: any;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private commonService: AuthenticationService
  ) {
  }

  @Input()
  set hasMultiPermission(value) {
    this._value = value;
    this.updateView(this._value);
  }

  private updateView(value) {
    if (this.commonService.hasPermission(value[0])) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    for (let i = 1; i < value.length; i++) {
      if (!value[i]) {
        this.viewContainer.clear();
      }
    }
  }

  ngOnInit(): void {
  }
}
