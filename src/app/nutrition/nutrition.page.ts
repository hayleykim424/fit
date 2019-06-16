import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ModalController, NavParams } from '@ionic/angular';

import { UsermealPage } from '../usermeal/usermeal.page';
import { UserProfile } from '../models/userProfile';


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {

  recipes: Array<any> = [];
  showRecipe: boolean = false;
  currentUser : any;
  recipeItems: any = [];
  //recipeTpyeItems: any = [];

  constructor(
    private modalController:ModalController,
    private dataService:DataService,
    private router:Router,
    private authenticationService: AuthenticationService,
    public afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.currentUser = this.afAuth.auth.currentUser;
    //this.workoutItems = [];
    //this.workoutTpyeItems = [];
    
    
    if(this.currentUser == null){
     this.showRecipe = false;
    }
    else{
      //çthis.workoutTpyeItems.length = 0;
      //this.workoutTpyeItems = [];
      this.showPersonalRecipe();

    }
}

showPersonalRecipe(){
  this.afAuth.auth.onAuthStateChanged(
    (user)=>{
      if(user){
        this.showRecipe = true;

        this.afDatabase.object('recipes/').snapshotChanges().subscribe(
          (action)=>{
            if(action.payload.val())
            {
              console.log(action.payload.val());
              //let items: any = action.payload.val();
              this.recipeItems = action.payload.val();
              this.recipeItems.forEach(
                (workout) =>{
                  this.recipes.push(workout);
                }
              );
            }
            else
            {
              console.log("No Data");
            }
          });
      }
    }
  );

}

showTypeOfRecipe(type)
  {
    let items:any = [];
    //items = [];
    //items.length = 0;
    this.recipes.forEach((Recipe)=>{
      if(Recipe.rtype == type)
      {
        
        items.push(Recipe);
        
      }
    });
    return items;
  }

  async showUserMeal(info){
    const modal = await this.modalController.create({
      component: UsermealPage,
      componentProps: info //from parameter of this function
    });
    return await modal.present();
  }

}
