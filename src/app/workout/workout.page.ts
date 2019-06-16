import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ModalController, NavParams } from '@ionic/angular';

import { UserworkoutPage } from '../userworkout/userworkout.page';
import { UserProfile } from '../models/userProfile';

import { Observable } from 'rxjs';
// import { Subscription } from 'rxjs';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  //workouts: Array<any> = [];
  //showWorkout: boolean = false;
  //currentUser : any;
  //workoutItems: any = [];
  //workoutTpyeItems: any = [];

  //workout as an Observable (so will update automatically)
  workouts$:Observable<any[]>;
  workoutTypes:Array<any>;
  workouts: Array<any> = [];
  showWorkout: boolean = false;
  currentUser : any;
  workoutItems: any = [];
  workoutTpyeItems: any = [];

  profile = {} as UserProfile;

  constructor(
    //public navCtrl: NavController,
    private modalController:ModalController,
    private dataService:DataService,
    private router:Router,
    private authenticationService: AuthenticationService,
    public afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase
  ) 
  {   
  }

  ngOnInit() {
    // subscribe to the auth$ observable in this.authenticationService
    this.authenticationService.auth$.subscribe( (user) => {
      //if user is authenticated
      if( user ){
        //set showWorkout to true
        this.showWorkout = true
        //subscribe to the data in workouts
        this.workouts$ = this.afDatabase.object('workouts/').valueChanges();
      }
      //if user is not authenticated
      else{
        
        this.showWorkout = false;
      }
    });
  }

  ionViewDidEnter(){
    //this.currentUser = this.afAuth.auth.currentUser;
    // //this.workoutItems = [];
    // //this.workoutTpyeItems = [];
    
    
    // if(this.currentUser == null){
    //  this.showWorkout = false;
    // }
    // else{
    //   //çthis.workoutTpyeItems.length = 0;
    //   //this.workoutTpyeItems = [];
    //   this.showPersonalWorkout();


    // }
}

ionPageWillLeave() {
}

showPersonalWorkout(){
  this.afAuth.auth.onAuthStateChanged(
    (user)=>{
      if(user){
        this.showWorkout = true;

        this.afDatabase.object('workouts/').snapshotChanges().subscribe(
          (action)=>{
            if(action.payload.val())
            {
              //this.workoutItems = [];
              console.log(action.payload.val());
              //let items: any = action.payload.val();
              this.workoutItems = action.payload.val();
              this.workoutItems.forEach(
                (workout) =>{
                  this.workouts.push(workout);
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

showTypeOfWorkout(type)
  {
    // let items:any = [];
    // //items = [];
    // this.workouts.forEach((Workout)=>{
    //   if(Workout.wtype == type)
    //   {
        
    //     items.push(Workout);
        
    //   }
    // });
    // return items;
    //subscribe to the workout$ and filter according to type
    this.workouts$.subscribe( (workouts) => {
      //set workoutTypes to values filtered using type
      let workoutTypes:Array<any> = workouts.filter( (item) => {
        if( item.wtype == type){
          return item;
        }
      });
      //return the filtered array of workouts
      return workoutTypes;
    });
  }

  async showUserWorkout(info){
    const modal = await this.modalController.create({
      component: UserworkoutPage,
      componentProps: info //from parameter of this function
    });
    return await modal.present();
  }

  

}
