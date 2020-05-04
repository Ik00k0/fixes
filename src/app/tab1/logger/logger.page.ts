import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router'

@Component({
  selector: 'app-logger',
  templateUrl: './logger.page.html',
  styleUrls: ['./logger.page.scss'],
})
export class LoggerPage implements OnInit {
  date = Date.now()
  selected = false;
  chosenMood = "";
  emojis = { great: "😆", good: "😁", justThere: "😐", Bad: "☹️", Terrible: "😖", Tense: "😓" }
  emojiValues = Object.values(this.emojis);
  emojiKeys = Object.keys(this.emojis);

  constructor(private router: Router) { }

  ngOnInit() {

    $('#submit').prop('disabled', true);
  }

  toggler(option) {
    let id = "#" + option;

    if (this.chosenMood == "") {
      $(id).toggleClass("dot");
      this.selected = true

    }

    if ((option == this.chosenMood)) {
      $(id).toggleClass("dot");
      this.selected = false
    }

    if(this.selected && this.chosenMood == ""){
      this.chosenMood = option
      $('#submit').prop('disabled', false);
    }else if (!this.selected && this.chosenMood == option){
      this.chosenMood=""
      $('#submit').prop('disabled', true);
    }

    
  }

  next(){
    this.router.navigateByUrl('activities')
  }
}
