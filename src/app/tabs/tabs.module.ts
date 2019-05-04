import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
// import { HomePageModule } from '../home/home.module';
// import { WorkoutPageModule } from '../workout/workout.module';
// import { NutritionPageModule } from '../nutrition/nutrition.module';
// import { ProfilePageModule } from '../profile/profile.module';


// import { HomePage } from '../home/home.page';
// import { WorkoutPage } from '../workout/workout.page';
// import { NutritionPage } from '../nutrition/nutrition.page';
// import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'home', 
        loadChildren: '../home/home.module#HomePageModule' 
      },
      { 
        path: 'workout', 
        loadChildren: '../workout/workout.module#WorkoutPageModule' 
      },
      { 
        path: 'nutrition', 
        loadChildren: '../nutrition/nutrition.module#NutritionPageModule' 
      },
      { 
        path: 'profile', 
        loadChildren: '../profile/profile.module#ProfilePageModule' 
      },
      { 
        path: 'login', 
        loadChildren: '../login/login.module#LoginPageModule' 
      },
      { 
        path: 'signup', 
        loadChildren: '../signup/signup.module#SignupPageModule' 
      }
      // { 
      //   path: 'settings', 
      //   loadChildren: '../settings/setttings.module#SettingsPageModule' 
      // },
    ]
  },
  {
    path:'',
    redirectTo: 'tabs/home',
    pathMatch: 'full'

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HomePageModule,
    // WorkoutPageModule,
    // NutritionPageModule,
    // ProfilePageModule
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
