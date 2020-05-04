import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mentalOptions } from "./mentalOptions";
import * as _ from 'lodash';
import * as $ from 'jquery'

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  skip: String = "Skip Entries"
  private mentOptions: mentalOptions = {
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
  };
  val: any = 0;
  ad: any = 0;
  val1: any = 0;
  arr = [];

  numberSelected = 0

  constructor(private router: Router) { }


  ngOnInit() { }

  continue() {
    this.router.navigateByUrl('');
  }

  selected(item: string) {
    let option = _.lowerCase(item);
    let jqOption = "#" + option;

    if (this.mentOptions.hasOwnProperty(option)) {
      $(jqOption).toggleClass("selected");


      if (this.mentOptions[option].selected == false && this.mentOptions[option].style == null) {
        this.numberSelected++;
        console.log(this.mentOptions)

      } else {
        this.numberSelected--;
        console.log(this.mentOptions)

      }


    }

    if (this.numberSelected > 0) {
      this.skip = "Continue"
      $("#skip").addClass("selected");
    } else {
      this.skip = "Skip"
      $("#skip").removeClass("selected");
    }

    this.mentOptions[option].selected = !this.mentOptions[option].selected;
    if (this.mentOptions[option].style == null) {
      this.mentOptions[option].style = "clicked"
    } else {
      this.mentOptions[option].style = null

    }

  }

  // opKeyboard() {
  //   this.keyboard.show()
  // }

}
