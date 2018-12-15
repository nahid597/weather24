import { Injectable } from '@angular/core';
import { Profile } from './models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: Profile[] = [
    new Profile('Default Profile', ['New York', 'Berlin'])
  ];

  saveNewProfile(cities: string[]) {
    const profileNumber = 'profile ' + this.profiles.length;
    const profile = new Profile(profileNumber, cities);
    this.profiles.push(profile);
  }

  getProfile() {
    return this.profiles;
  }

  deleteProfile(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

}
