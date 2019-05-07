import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnepageComponent } from './onepage/onepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { TouristsComponent } from './tourists/tourists.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';


@NgModule({
  declarations: [
    AppComponent,
    OnepageComponent,
    DashboardComponent,
    SearchComponent,
    LoginComponent,
    AddTouristComponent,
    TouristsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    InlineSVGModule.forRoot({baseUrl: '/assets/'}),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: 'Ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
