import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from '../models/userProfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //user logged in?
  currentUser : any;
  showBtn     : boolean = false;
  showGreeting : boolean = false;
  name: any;

  profile = {} as UserProfile;

  constructor(
    private router:Router,
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase

  ) { }

  ngOnInit() {
    console.log(this.currentUser);
  }

  ionViewDidEnter(){
    this.currentUser = this.afAuth.auth.currentUser;

    if(this.currentUser == null){
     this.showBtn = true;
    }
    else{
      this.showBtn = false;

      //username
      this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/username/').snapshotChanges().subscribe(
        (action)=>{
          if(action.payload.val())
          {
            console.log(action.payload.val());
            this.name = action.payload.val();
          }
          else
          {
            console.log("No Data");
          }
      });
      this.showGreeting = true;
    }
    console.log(this.currentUser);
  }
 

  showSignup(){
    this.router.navigate(['/signup']);
  }

  showUserWorkout(){
    this.router.navigate(['/userworkout']);
  }

  showUserMeal(){
    this.router.navigate(['/usermeal']);
  }
}
