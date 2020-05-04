import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  user:any
  constructor(public router:Router, public composer:EmailComposer) {}


  buttonClicked(){
    alert("dfghjjh"); 
  }

  openContactSupport(){
    

    this.composer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
    });
    
    let email = {
      to: 'hodoa817@gmail.com',
      cc: 'albert.hodo@icloud.com',
      //bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        //attach the mind IT image details
        //'file://img/logo.png',
        //'res://icon.png',
        //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //'file://README.pdf'
      ],
      subject: 'MIND IT SUPPORT | MENTAL HEALTH ISSUES',
      body: 'Hello Friend, ',
      isHtml: true
    }
    
    // Send a text message using default options
    this.composer.open(email);
    //this.router.navigateByUrl('contact-support');
    
  }

  openProfilePage(user){
    //alert(user);
    this.router.navigateByUrl('about/'+user);
    
  }

  openAboutUs(){
    this.router.navigateByUrl("about-us");
  }
  openSettingsPage(){
    this.router.navigateByUrl("tabs/tab4/settings");
  }

  

}
