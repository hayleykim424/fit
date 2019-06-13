import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { take } from 'rxjs/operators';

import { UserProfile } from '../models/userProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser : any;
  ref: any;
  username: any;
  showBtn     : boolean = false;
  showProf    : boolean = false;

  email: string;
  name:any;
  height:any;
  weight:any;
  activity: any;
  endurance: any;
  strength: any;

  profile = {} as UserProfile;

  constructor(
    private authenticationService: AuthenticationService,
    private router:Router,
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) 
  { 

  }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    this.currentUser = this.afAuth.auth.currentUser;
    
    if(this.currentUser == null){
     this.showBtn = true;
     this.showProf = false;
    }
    else{
      this.showBtn = false;
      this.showProf = true;

      this.afAuth.auth.onAuthStateChanged(
        (user)=>{
          if(user){
            this.email = user.email;
            this.showBtn = false;
            this.showProf = true;
            
            this.ref = this.afDatabase.list('/userProfile/' + this.afAuth.auth.currentUser.uid + '/username/').valueChanges();

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

            //height
            this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/height/').snapshotChanges().subscribe(
              (action)=>{
                if(action.payload.val())
                {
                  console.log(action.payload.val());
                  this.height = action.payload.val();
                }
                else
                {
                  console.log("No Data");
                }
            });

            //weight
            this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/weight/').snapshotChanges().subscribe(
              (action)=>{
                if(action.payload.val())
                {
                  console.log(action.payload.val());
                  this.weight = action.payload.val();
                }
                else
                {
                  console.log("No Data");
                }
            });

            //activity
            this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/activity/').snapshotChanges().subscribe(
              (action)=>{
                if(action.payload.val())
                {
                  console.log(action.payload.val());
                  this.activity = action.payload.val();
                }
                else
                {
                  console.log("No Data");
                }
            });

            //endurance
            this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/endurance/').snapshotChanges().subscribe(
              (action)=>{
                if(action.payload.val())
                {
                  console.log(action.payload.val());
                  this.endurance = action.payload.val();
                }
                else
                {
                  console.log("No Data");
                }
            });

            //strength
            this.afDatabase.object('userProfile/' + this.afAuth.auth.currentUser.uid + '/strength/').snapshotChanges().subscribe(
              (action)=>{
                if(action.payload.val())
                {
                  console.log(action.payload.val());
                  this.strength = action.payload.val();
                }
                else
                {
                  console.log("No Data");
                }
            });
            
          }
          else{
            //user is not signed in
            this.email = null;
            
          }
        }
      );


    }
  // console.log(this.afAuth.auth.currentUser.uid);
  //   this.ref.subscribe(items => {
  //     console.log(items);  
  //  });


  // this.ref.subscribe(items => { 
  //   console.log(items); 
  //   });
    //console.log(this.username);
  }

//Create user profile
createUserProfile(){
  const self = this;

  this.afAuth.authState.subscribe(data => {
    let id: any = data.uid;
  });

  this.afAuth.authState.pipe(take(1)).subscribe(auth => {
    let path= 'userProfile'+'/'+ auth.uid;
    this.afDatabase.object(path).set(this.profile);
  })
}




  
  showSettings(){
    this.router.navigate(['/settings']);
  }

}
