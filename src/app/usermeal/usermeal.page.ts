import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermeal',
  templateUrl: './usermeal.page.html',
  styleUrls: ['./usermeal.page.scss'],
})
export class UsermealPage implements OnInit {

  title: string;
  instruction: string;
  image: string;
  ingredients: string;


  constructor(
    private router:Router,
    private _location: Location,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.modalController.dismiss();
    this._location.back();
  }
}
