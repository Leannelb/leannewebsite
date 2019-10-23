import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
require("firebase/auth");
require("firebase/firestore");

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut()
  }
}


