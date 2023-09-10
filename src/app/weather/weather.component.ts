// src/app/weather/weather.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city = '';
  weatherData: any;
  showSpinner = false; 

  constructor(private weatherService: WeatherService) {}

 
  searchWeather() {
    this.showSpinner = true;
    this.weatherService.getWeatherByCity(this.city).subscribe((data) => {
      this.weatherData = data;
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
    });
  }
}
