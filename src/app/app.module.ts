import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
