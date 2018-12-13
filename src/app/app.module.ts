import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
