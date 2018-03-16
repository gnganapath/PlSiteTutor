import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/geolocation/geolocation.page.html',
})
export class GeolocationPage {
  location: { lat: number, lng: number };

  constructor() { }

  getGeolocation(){
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    });
  }
}
