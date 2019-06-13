import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'userworkout', loadChildren: './userworkout/userworkout.module#UserworkoutPageModule' },
  { path: 'usermeal', loadChildren: './usermeal/usermeal.module#UsermealPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'workout', loadChildren: './workout/workout.module#WorkoutPageModule' },
  // { path: 'nutrition', loadChildren: './nutrition/nutrition.module#NutritionPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
