import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  articles:Array<{aId:any, a_url:any, a_author:any, a_title: any, a_imgsrc:any, a_body:any}>

  constructor(public http:HTTP) {}

  ngOnInit(){
    //this.http.setDataSerializer("json");
    this.http.get('http://cs.ashesi.edu.gh/~godlove_otoo/MindITBackend/view/viewarticles.php', {},{})
    
    .then((data) => {

      //alert(JSON.parse(data.data));
      //this.router.navigateByUrl('view-contacts');
       this.articles=JSON.parse(data.data);
     })
     .catch((error) => {
        alert("error here");
        alert(error);
     });
     
  }
}