import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  currentUser : any;
  showBtn     : boolean = false;
  showProf : boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router:Router,
    private toaster:ToastController,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.currentUser = this.afAuth.auth.currentUser;
    if(this.currentUser == null){
     this.showBtn = false;
     this.showProf = false;
    }
    else{
      this.showBtn = true;
      this.showProf = true;


    }
    console.log(this.currentUser);
    console.log(this.showBtn);
  }


  showProfile(){
    this.router.navigate(['/tabs/profile']);
  }

  showAboutUs(){
    this.router.navigate(['/aboutus']);
  }

  showContact(){
    this.router.navigate(['/contact']);
  }

  signOut() {
    this.authenticationService.signOut()
    .then( (response) => {
      if( response.success ){
        //navigate to home (signup)
        this.showToast('You have been logged out')
        .then(()=>{ 
          this.router.navigate(['/tabs/home']);
        });
      }
    })
    .catch( (error) => {
      //signout error
    });
  }

  async showToast(msg){
    const toast = await this.toaster.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  
}
