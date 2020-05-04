import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { userinfo } from '../startpages/page1/userInfoTemp'
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private userInfo: userinfo;
  private nickname = '';
  // private date = Date.now()
  constructor(private router: Router, private toast: ToastController, private platform: Platform, private nativeStorage: NativeStorage, private nonStorage: Storage) { }

  ngOnInit(): void {

    this.userInfo = {
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
    this.nickname = this.userInfo.nickname


    // if (this.platform.is("android")) {
    //   this.nativeStorage.getItem("userInfo").then(
    //     (data) => {
    //       this.userInfo = data;
    //       this.nickname = this.userInfo.nickname;
    //     },
    //     (failure) => {
    //       alert("Error retrieving user info #tab1");
    //     }
    //   )
    // }
    // if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
    //   this.nonStorage.get("userInfo").then(
    //     (data) => {
    //       this.userInfo = data;
    //       this.nickname = this.userInfo.nickname;
    //     },
    //     (failure) => {
    //       alert("Error retrieving user info #tab1");
    //     }
    //   )
    // }

  }


  today(){
    // alert(Date.now())
    this.router.navigateByUrl('logger');
  }
}
