import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { DomLoggerComponent } from './dom-logger/dom-logger.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoughnutChartComponent } from './chartcomponents/doughnut-chart/doughnut-chart.component';

const config = {
  apiKey: "AIzaSyDtZcerC-KYLeqjxrJRaTbLheIFhZuEmlk",
  authDomain: "mokuton-15add.firebaseapp.com",
  databaseURL: "https://mokuton-15add.firebaseio.com",
  projectId: "mokuton-15add",
  storageBucket: "mokuton-15add.appspot.com",
  messagingSenderId: "562281090125"
};

@NgModule({
  declarations: [
    AppComponent,
    DomLoggerComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// TODO: Only using config. 
// In the future, add a Dev and Prod config
// @See https://fireship.io/snippets/install-angularfire/
