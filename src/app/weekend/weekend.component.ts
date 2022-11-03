import { Component, OnInit } from '@angular/core';

interface TenDaysWeather {
  date: string;
  daytimeTemperature: number;
  nightTemperature: number;
  dayImage: string;
  nightImage: string;
  status: string;
  rain: number;
  wind: string;
  daytimeState: string;
  nightState: string;
  humidity: number;
  UVlevel: string;
  sunRise: string;
  sunSet: string;
  moonRise: string;
  moonSet: string;
}

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['../app.component.css', '../main/main.component.css', '../hourly/hourly.component.css', '../ten-days/ten-days.component.css', './weekend.component.css']
})
export class WeekendComponent implements OnInit {
  public  today = new Date();
  public time = this.today.getHours() + ":" + this.today.getMinutes();
  data1: TenDaysWeather[] = [
    { date: 'Th 6 09', daytimeTemperature: 28, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 82, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th 7 10', daytimeTemperature: 30, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 89, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'CN 11', daytimeTemperature: 29, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 68, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
  ];
    data2: TenDaysWeather[] = [
    { date: 'Th 6 16', daytimeTemperature: 36, nightTemperature: 25, dayImage: '../../assets/img/sunrise.png', nightImage: '../../assets/img/moon.png', status: 'Trời nắng', rain: 1, wind: 'BĐB 7 dặm/h', daytimeState: 'Chủ Yếu Trời Trong. Cao 36độ C. Gió BĐB ở tốc độ 5 đến 10 dặm/giờ.', nightState: 'Phần nào có mây. Thấp 25độ C. Gió Đ ở tốc độ 5 đến 10 dặm/giờ.', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th 7 17', daytimeTemperature: 33, nightTemperature: 25, dayImage: '../../assets/img/mostly_cloudy.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Nhiều mây', rain: 24, wind: 'ĐB 7 dặm/h', daytimeState: 'Chủ yếu có mây. Cao 33độ C. Gió ĐB ở tốc độ 5 đến 10 dặm/giờ.', nightState: 'Giông bão. Thấp 25độ C. Gió BĐB và có thể thay đổi. Khả năng có mưa 70%.', humidity: 63, UVlevel: '10 / 10', sunRise: '5:41', sunSet: '18:07', moonRise: '18:58', moonSet: '1:59' },
    { date: 'CN 18', daytimeTemperature: 29, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 97, wind: 'BĐB 7 dặm/h', daytimeState: 'Giông bão. Cao 29độ C. Gió BĐB ở tốc độ 5 đến 10 dặm/giờ. Khả năng có mưa 100%.', nightState: 'Giông bão. Thấp 24độ C. Gió B ở tốc độ 5 đến 10 dặm/giờ. Khả năng có mưa 90%.', humidity: 84, UVlevel: '6 / 10', sunRise: '5:41', sunSet: '18:06', moonRise: '16:50', moonSet: '3:07' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementOpen();
  }

  public getElementOpen() {
    let e = document.getElementsByClassName('DayPartDetail');
    e[0].setAttribute('open', '');
  }
}
