import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  startWatchingGPS() {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  async getCurrentCoordinates() {
    const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy: true});
    return coordinates;
  }
}