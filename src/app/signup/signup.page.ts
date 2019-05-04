import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signUpForm:FormGroup;

  constructor(
    private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toaster:ToastController
  ) { }

  ngOnInit() {//called when the module is initialised
    this.signUpForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password:['', [Validators.required, Validators.minLength(6)]]
      // workoutWeek: ['', [ Validators.required, Validators.toString ]],
      // workoutRun: ['', [ Validators.required, Validators.toString ]],
      // workoutSquat: ['', [ Validators.required, Validators.toString ]]
    });
  }

  signUp( formData ){
    console.log(formData);
    this.authService.signUp( formData.email, formData.password)
    .then( (response) => {
      //sign up successful
      this.showToast('signed up successfully!');
      //this.router.navigate(['/tabs/home']);
      console.log(response);
    })
    .catch( (error) => {
      //sign up failed
      this.showToast('Error signing up. Please try again!');
      console.log(error);
    });

  }
    async showToast(message:string){
      const toast = await this.toaster.create({
        message: message,
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }

    showHome(){
      this.router.navigate(['/tabs/home']);
    }

    showSignIn(){
      this.router.navigate(['/tabs/login']);
    }

}
