import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser : any;
  showBtn     : boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router:Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.currentUser = this.afAuth.auth.currentUser;
    if(this.currentUser == null){
     this.showBtn = true;
    }
    else{
      this.showBtn = false;


    }
    console.log(this.currentUser);
    console.log(this.showBtn);
  }
  
  showSettings(){
    this.router.navigate(['/settings']);
  }

}
