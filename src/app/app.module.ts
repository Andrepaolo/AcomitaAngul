import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { ListActivityComponent } from './components/list-activity/list-activity.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    AppComponent,
    ListActivityComponent,
    CreateActivityComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
