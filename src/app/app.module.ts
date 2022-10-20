import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FizzbuzzComponent } from './pages/fizzbuzz/fizzbuzz.component';
import { LeapyearComponent } from './pages/leapyear/leapyear.component';
import { PrimeComponent } from './pages/prime/prime.component';
import { CalculateComponent } from './calculate/calculate.component';
import { PatternComponent } from './pages/pattern/pattern.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FizzbuzzComponent,
    LeapyearComponent,
    PrimeComponent,
    CalculateComponent,
    PatternComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
