import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { userinfo } from "../page1/userInfoTemp";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {


  private checkbox: FormGroup = new FormGroup({
    agree: new FormControl('', Validators.required)
  })



  name: string = "";
  private userInfo: userinfo;
  constructor(public activeRoute: ActivatedRoute, private router: Router, private platform: Platform, private nativeStore: NativeStorage, private storage: Storage) { }

  ngOnInit() {
    this.name = this.activeRoute.snapshot.paramMap.get('name');

    if (this.platform.is("android")) {

      this.nativeStore.getItem("userInfo").then(
        (data) => {
          this.userInfo = data;
          console.log(data);
        },
        (error) => {
          alert("Error: User Info #2")
        },
      )

    } else if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      // alert("not android")
       this.storage.get("userInfo").then(

        async (data)=>{
          this.userInfo = await data
          this.userInfo.agreed = true;
        },
        (failure)=>{
          alert("Error: User Info #2")
        }
      )
    }

  }

  next() {
    this.storage.set("userInfo", this.userInfo);
    this.router.navigateByUrl('page3');
  }


}
