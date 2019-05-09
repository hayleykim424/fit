import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //user logged in?
  currentUser : any;
  showBtn     : boolean = false;

  constructor(
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
 

  showSignup(){
    this.router.navigate(['/signup']);
  }
}
