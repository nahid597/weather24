import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../models/weather-item';
import { Subject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any;
  errormsg: any;

  constructor(private weatherService: WeatherService) { }

  onSubmit(form) {
    this.weatherService.getWeatherData(form.location).subscribe(data => {
      const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
      this.weatherService.addWeatherItem(weatherItem);
    }, error => this.errormsg = error);

  }

  onSerachLoaction(cityName: string) {
     this.searchStream.next(cityName);
  }

  ngOnInit() {
    this.searchStream
    .subscribe(
      data => this.data = data
    );
  }

}
