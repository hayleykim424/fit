import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uid:string;
  constructor(
    private afAuth:AngularFireAuth,
    private afDb:AngularFireDatabase
  ) { 
    this.afAuth.auth.onAuthStateChanged( //observes whether the user is logged in or not
      (user) => {
        if ( user ){
          this.uid = this.afAuth.auth.currentUser.uid;
        }
        else{
          this.uid = null;
        }
      }
    ); 
  }

  async writeData(data){
    //write data to firebase
    try{
      if( !this.uid )  {
        throw "User is not authenticated";
      }
      else{
        const path = `profile/${this.uid}/`;
        const dbRef = this.afDb.list( path );
        await dbRef.push( data );
        return { success: true };
      }
    }
    catch( error ){
      return { success: false, error: error};
    }
  }

  setUid( uid:string ) {
    this.uid = uid;
  }


  async updateProfile( profile ){
    const path = `profile/${this.uid}`;
    const dbRef = this.afDb.list( path );
    await dbRef.update( profile.key, {name: profile.name, date: profile.date, content: profile.content});
    return { success: true };
  }
}
