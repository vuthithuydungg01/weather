import { Component, OnInit } from '@angular/core';

interface TodayWeather {
  // date: string;
  // time: string;
  // morningTemperature: number;
  // afternoonTemperature: number;
  // eveningTemperature: number;
  // nightTemperature: number;
  daytimeTemperature: number;
  nightTemperature: number;
  dayImage: string;
  // nightImage: string;
  status: string;
  // daytimeRainfall: number;
  // nightRainfall: number;
  sunRise: string;
  sunSet: string;
  wind: string;
  humidity: number;
  stopPoint: number;
  pressure: number;
  UVlevel: string;
  vision: string;
  moon: string;
}

interface Forecast {
  period: string;
  time: string;
  daytimeTemperature: number;
  nightTemperature: number;
  image: string;
  rainfall: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.css',
              './main.component.css']
})
export class MainComponent implements OnInit {

  public  today = new Date();
  public time = this.today.getHours() + ":" + this.today.getMinutes();

  data1: TodayWeather[] = [
    {daytimeTemperature: 33, nightTemperature: 25, dayImage: '../../assets/img/sunrise.png', status: 'Khá', sunRise: '5:41', sunSet: '18:08', wind: '7 dặm/h', humidity: 56, stopPoint: 23, pressure: 1010.2, UVlevel: 'Cực điểm', vision: '10 dặm', moon: 'Trăng khuyết đầu tháng'},
    // {date: '', time: '', morningTemperature: 2, afternoonTemperature: 2, eveningTemperature: 2, nightTemperature: 2, dayImage: '', nightImage: '', status: '', daytimeRainfall: 1,   nightRainfall: 1, sunRise: '', sunSet: '', wind: '', humidity: 1, stopPoint: 1, pressure: 1, UVlevel: '', vision: '', moon: ''},
  ];
  data2: Forecast[] = [
    {period: 'Sáng', time: '', daytimeTemperature: 31, nightTemperature: 1, image: '../../assets/img/sun.png', rainfall: '--'},
    {period: 'Chiều', time: '', daytimeTemperature: 35, nightTemperature: 1, image: '../../assets/img/sunrise.png', rainfall: '1'},
    {period: 'Tối', time: '', daytimeTemperature: 28, nightTemperature: 1, image: '../../assets/img/moon.png', rainfall: '3'},
    {period: 'Qua đêm', time: '', daytimeTemperature: 26, nightTemperature: 1, image: '../../assets/img/moon.png', rainfall: '6'}
  ];
  data3: Forecast[] = [
    {period: 'Sáng', time: 'Bây giờ', daytimeTemperature: 35, nightTemperature: 1, image: '../../assets/img/sun.png', rainfall: '0'},
    {period: 'Chiều', time: '15:00', daytimeTemperature: 35, nightTemperature: 1, image: '../../assets/img/sunrise.png', rainfall: '0'},
    {period: 'Tối', time: '16:00', daytimeTemperature: 35, nightTemperature: 1, image: '../../assets/img/sunrise.png', rainfall: '0'},
    {period: 'Qua đêm', time: '17:00', daytimeTemperature: 33, nightTemperature: 1, image: '../../assets/img/sunrise.png', rainfall: '0'},
    {period: 'Qua đêm', time: '18:00', daytimeTemperature: 32, nightTemperature: 1, image: '../../assets/img/sunrise.png', rainfall: '1'}
  ];
  data4: Forecast[] = [
    {period: 'Sáng', time: 'Hôm nay', daytimeTemperature: 35, nightTemperature: 25, image: '../../assets/img/sunrise.png', rainfall: '1'},
    {period: 'Chiều', time: 'Th 4 07', daytimeTemperature: 34, nightTemperature: 25, image: '../../assets/img/small-rain.png', rainfall: '40'},
    {period: 'Tối', time: 'Th 5 08', daytimeTemperature: 29, nightTemperature: 24, image: '../../assets/img/heavy-rain.png', rainfall: '99'},
    {period: 'Qua đêm', time: 'Th 6 09', daytimeTemperature: 28, nightTemperature: 24, image: '../../assets/img/heavy-rain.png', rainfall: '92'},
    {period: 'Qua đêm', time: 'Th 7 10', daytimeTemperature: 28, nightTemperature: 24, image: '../../assets/img/heavy-rain.png', rainfall: '87'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
