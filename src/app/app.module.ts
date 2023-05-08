import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { NavComponent } from './common/components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const config = {
  apiKey: 'AIzaSyC-JJGGUR7VnmvPYuSzj1pvfM1mCtmdjXU',
  authDomain: 'fir-authproject-f3c1f.firebaseapp.com',
  projectId: 'fir-authproject-f3c1f',
  storageBucket: 'fir-authproject-f3c1f.appspot.com',
  messagingSenderId: '451362323797',
  appId: '1:451362323797:web:d929f7a8c4df0cdbcd03dc',
  measurementId: 'G-H6JVMSDEF3',
};

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
//       customParameters: {
//         auth_type: 'reauthenticate',
//       },
//       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     },
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     },
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: '<your-tos-link>',
//   //privacy url
//   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE,
// };

@NgModule({
  declarations: [NavComponent, AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    // AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  name = 'Angular';
}
