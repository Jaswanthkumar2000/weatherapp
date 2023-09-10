// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '41d31d80cf45a80cc407235ada37c61c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
