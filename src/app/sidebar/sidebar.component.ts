import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { WeatherService } from '../weather.service';
import { Profile } from '../models/profile';
import { WeatherItem } from '../models/weather-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profiles: Profile[];

  constructor(private profileService: ProfileService, private weatherService: WeatherService) { }

  onSaveNew() {
    const cities = this.weatherService.getWeatherItems().map(function(element) {
        return element.cityName;
    });
      this.profileService.saveNewProfile(cities);

  }
  ngOnInit() {
    this.profiles = this.profileService.getProfile();
  }

  onLoadProfile(profile: Profile) {
   // this.weatherService.clearWeatherItem();
    for (let i = 0; i < profile.cities.length; i++) {

      if (profile.cities[i + 1] !== profile.cities[i]) {
        this.weatherService.getWeatherData(profile.cities[i])
          .subscribe(data => {
            const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
            this.weatherService.addWeatherItem(weatherItem);
          });
      }

    }
  }

  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this.profileService.deleteProfile(profile);
  }

}
