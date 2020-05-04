import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular'
import { userinfo } from './userInfoTemp'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  private nameForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private router: Router, private nativeStorage: NativeStorage, private platform: Platform, private storage: Storage) { }
  private userInfo: userinfo = {
    nickname: "Peyi",
    agreed: false,
    mentOptions: {
      autism: { selected: false, style: null },
      adhd: { selected: false, style: null },
      ocd: { selected: false, style: null },
      depression: { selected: false, style: null },
      bipolar: { selected: false, style: null },
      ptsd: { selected: false, style: null },
      selfharm: { selected: false, style: null },
      schizo: { selected: false, style: null },
      eatingd: { selected: false, style: null },
      anxiety: { selected: false, style: null }
    }
  }
  ngOnInit() {
    this.storage.clear();
  }


  next() {
    let specifiedName: String = this.nameForm.get('name').value;

    if (this.platform.is("android")) {

      this.nativeStorage.setItem("userInfo", this.userInfo)

    } else {

      this.storage.set("userInfo", this.userInfo)
      // localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      // alert(localStorage.getItem("userInfo"));
    }


    if (specifiedName.includes(" ")) {
      let nameArray = specifiedName.split(" ");
      let name = _.upperCase(nameArray[0])
      this.router.navigateByUrl('page2/' + name);
    } else {
      this.userInfo.nickname = this.nameForm.get('name').value;
      this.router.navigateByUrl('page2/' + _.upperCase(specifiedName));
    }



  }


}
