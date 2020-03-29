import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatalistmanagementComponent } from './datalistmanagement/datalistmanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DatalistmanagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
