import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.less']
})
export class DetailUserComponent implements OnInit {

  id: any;

  dataFake = [
    {
      id: 1,
      maNv: "NV01",
      userName: "admin",
      passWord: "admin",
      email: "hoang@gmail.com",
      name: "hoang",
      role: 2
    },
    {
      id: 2,
      maNv: "NV01",
      userName: "admin",
      passWord: "admin",
      email: "hoang@gmail.com",
      name: "hoang",
      role: 2
    },
    {
      id: 3,
      maNv: "NV01",
      userName: "admin",
      passWord: "admin",
      email: "hoang@gmail.com",
      name: "hoang",
      role: 2
    },
    {
      id: 4,
      maNv: "NV01",
      userName: "admin",
      passWord: "admin",
      email: "hoang@gmail.com",
      name: "hoang",
      role: 2
    }
  ]

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation() ? this.router.getCurrentNavigation().extras.state.request : '1');
    this.id = this.activatedRouter.snapshot.params['id'];
    if (this.id) {
      // this.isEdit = true;
      // this.loadData(this.id);
      // this.addForm.get('code').disable();
      // console.log('IsEdit');
    }
  }

  buildForm() {
    // this.addForm = this.formBuilder.group({
    //   id: null,
    //   // code: new FormControl(null, [Validators.maxLength(500), Validators.pattern(REGEX.VALIDATE_CODE_NOT_SPACE)]),
    //   name: new FormControl(null, Validators.maxLength(500)),
    //   systemName: new FormControl(null, Validators.maxLength(500)),
    //   osId: new FormControl(null, Validators.maxLength(500)),
    //   svServiceId: new FormControl(null, Validators.maxLength(500)),
    //   flavorId: new FormControl(null, Validators.maxLength(500)),
    //   storageId: new FormControl(null, Validators.maxLength(500)),
    //   svGroupId: new FormControl(null, Validators.maxLength(500)),
    //   networkId: new FormControl(null, Validators.maxLength(500)),
    //   ip: new FormControl(null, Validators.maxLength(500)),
    //   vol1: new FormControl(null, Validators.maxLength(500)),
    //   vol2: new FormControl(null, Validators.maxLength(500)),
    //   vol3: new FormControl(null, Validators.maxLength(500)),
    //   notes: new FormControl(null, Validators.maxLength(500)),
    // });
  }
}
