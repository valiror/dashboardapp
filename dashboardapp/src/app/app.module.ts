import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { Options, DataPoint, ChartObject, SeriesObject } from 'highcharts';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
