// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCQeJdHlXd16IIjuW3UbioOlH78qe790Ts",
    authDomain: "workout-and-nutrition-c138b.firebaseapp.com",
    databaseURL: "https://workout-and-nutrition-c138b.firebaseio.com",
    projectId: "workout-and-nutrition-c138b",
    storageBucket: "workout-and-nutrition-c138b.appspot.com",
    messagingSenderId: "1057120919425",
    appId: "1:1057120919425:web:2b7313e861622ba8"
  }
  // Initialize Firebase
//firebase.initializeApp(firebaseConfig);
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
