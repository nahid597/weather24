import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../models/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  onSubmit(form) {
    this.weatherService.getWeatherData(form.location).subscribe(data => {
      const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
      this.weatherService.addWeatherItem(weatherItem);
    });
  }
  ngOnInit() {
  }

}
