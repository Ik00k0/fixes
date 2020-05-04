import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public http:HTTP,public activeRoute:ActivatedRoute, public router:Router) { }
  cont_datda:any;

  u_name:any
  p_dob:any
  p_num:any
  u_mail:any
  c_name:any
  c_num:any
  id:any
  gender:any

  ngOnInit() {
    let dataReceived= this.activeRoute.snapshot.paramMap.get('name');
    this.id=dataReceived;
    this.setPerson(dataReceived);
  }

  setPerson(user){
    this.http.post('http://cs.ashesi.edu.gh/~godlove_otoo/MindITBackend/view/getuser.php', {user}, {})
    .then(data=>{
      this.cont_datda=JSON.parse(data.data);
      this.u_name=this.cont_datda[0]['name'];
      this.p_dob=this.cont_datda[0]['dob'];
      this.p_num=this.cont_datda[0]['phoneNum'];
      this.u_mail=this.cont_datda[0]['email'];
      this.c_name=this.cont_datda[0]['EContactName'];
      this.c_num=this.cont_datda[0]['EContactNum'];
      this.gender=this.cont_datda[0]['gender'];
      //alert(this.personData);
    })
    .catch(error => {
      alert(error.status);
      alert(error.error); // error message as string
      alert(error.headers);
    
    });
  }


  onSubmit(form:NgForm){
    this.updatePerson();
  }
  
  updatePerson(){
    //alert(this.id+  this.name+ this.number);
    this.http.post('http://cs.ashesi.edu.gh/~godlove_otoo/MindITBackend/view/updateuser.php', {
      userId:this.id, name: this.u_name, gender: this.gender,
       dob: this.p_dob,phoneNum:this.p_num, email:this.u_mail,
       EContactName: this.c_name, EContactNum:this.c_num
      },{})//add all the details
    
    .then((data) => {

      alert("information updated");
       //alert(JSON.parse(data.data));
       //this.router.navigateByUrl('view-contacts');
     })
     .catch((error) => {
         alert(error);
     });
    }



}
