import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './models/weater.data';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { WeatherItem } from './models/weather-item';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherItems() {
    return WEATHER_ITEMS;
  }


  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='
     + cityName + '&APPID=cb51cb1b7a819e9d44bb6f2c92cf89f1&units=metric')
     .pipe(catchError(this.errorHandelar));
  }

  errorHandelar(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }

  clearWeatherItem() {
    return WEATHER_ITEMS.splice(0);
  }
}
