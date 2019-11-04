import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './userDetail/userDetail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentPageComponent } from './commentPage/commentPage.component';
import { CommentUnitComponent } from './commentUnit/commentUnit.component';
import { AppService } from './app.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
@NgModule({
  declarations: [
    AppComponent, UserDetailComponent, CommentPageComponent, CommentUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,
  ],
  providers: [AppService, FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
