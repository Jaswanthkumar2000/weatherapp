import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';


// import { NgMathPipesModule } from 'angular-pipes';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    
    // NgMathPipesModule
    

    ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
