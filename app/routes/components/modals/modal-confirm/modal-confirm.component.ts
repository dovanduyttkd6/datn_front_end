import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() title: string;
  @Input() description: string;
  @Input() content: string;
  @Input() text: string;
  @Input() textButtonCancel: string;
  @Input() hiddenBtnCancel = false;
  @Input() hiddenContent = false;
  @Output() clickCancel = new EventEmitter();
  @Output() callBack = new EventEmitter();
  @Output() clickConfirm = new EventEmitter();
  @Input() isDelete: any = false;
  @Input() isConfirm: any = false;

  constructor() {
  }

  ngOnInit() {
  }

  openModal() {

  }

  handleCancelModal() {
    this.clickCancel.emit();
  }

  handleDelete() {
    this.callBack.emit();
  }

  handleConfirm() {
    this.clickConfirm.emit();
  }
}
