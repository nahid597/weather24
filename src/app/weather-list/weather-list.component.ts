import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../models/weather-item';
import { WEATHER_ITEMS } from '../models/weater.data';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  weatherItems: WeatherItem[];

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
