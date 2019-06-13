import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userworkout',
  templateUrl: './userworkout.page.html',
  styleUrls: ['./userworkout.page.scss'],
})
export class UserworkoutPage implements OnInit {

  title: string;
  description: string;
  image: string;
  //key: string;

  constructor(
    private router:Router,
    private _location: Location,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }


  goBack(){
    this.modalController.dismiss();
    this.router.navigate(['/tabs/workout']);
  }
}
