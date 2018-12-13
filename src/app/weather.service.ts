import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './models/weater.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeatherItems() {
    return WEATHER_ITEMS;
  }
}
