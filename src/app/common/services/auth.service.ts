import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
      } else {
      }
    });
  }

  //sign in with email/password
  signIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.setUserData(result.user);

        this.angularFireAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string) {
    return this.augularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail() {
    return this.augularFireAuth.currentUser
      .then((user: any) => {
        user.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  //
  setUserData(obj: any) {}
}