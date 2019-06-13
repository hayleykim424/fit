import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
