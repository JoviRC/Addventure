import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule }from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { GameModePageModule } from "../app/contenedores/game-mode/game-mode.module";

const firebaseConfig = {
  apiKey: "AIzaSyDVR5pFIV2qecRGTzH5k7fw08dZaehajBg",
  authDomain: "addventure-81611.firebaseapp.com",
  databaseURL: "https://addventure-81611.firebaseio.com",
  projectId: "addventure-81611",
  storageBucket: "addventure-81611.appspot.com",
  messagingSenderId: "235266653822",
  appId: "1:235266653822:web:cdf1c9e345d08fd7ca222f",
  measurementId: "G-JLGTW1W6ZL"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule, 
    AngularFireStorageModule,
    GameModePageModule
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
