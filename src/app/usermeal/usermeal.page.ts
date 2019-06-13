import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-usermeal',
  templateUrl: './usermeal.page.html',
  styleUrls: ['./usermeal.page.scss'],
})
export class UsermealPage implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
