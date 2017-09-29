import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {firebaseConfig} from '../environments/firebaseConfig';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    InputBarComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
