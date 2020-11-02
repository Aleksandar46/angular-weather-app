import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherMainComponent } from './componenets/weather-main/weather-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
