import { AfterViewInit, Component, OnInit } from '@angular/core';

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
  selector: 'app-ten-days',
  templateUrl: './ten-days.component.html',
  styleUrls: ['../app.component.css', '../main/main.component.css', '../hourly/hourly.component.css', './ten-days.component.css']
})
export class TenDaysComponent implements OnInit, AfterViewInit {
  public  today = new Date();
  public time = this.today.getHours() + ":" + this.today.getMinutes();

  data: TenDaysWeather[] = [
    { date: 'Hôm nay', daytimeTemperature: 36, nightTemperature: 25, dayImage: '../../assets/img/sunrise.png', nightImage: '../../assets/img/moon.png', status: 'Trời nắng', rain: 1, wind: 'BĐB 7 dặm/h', daytimeState: 'Chủ Yếu Trời Trong. Cao 36độ C. Gió BĐB ở tốc độ 5 đến 10 dặm/giờ.', nightState: 'Phần nào có mây. Thấp 25độ C. Gió Đ ở tốc độ 5 đến 10 dặm/giờ.', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay() + 2) + ' ' + (this.today.getDate() + 1), daytimeTemperature: 33, nightTemperature: 25, dayImage: '../../assets/img/mostly_cloudy.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Nhiều mây', rain: 24, wind: 'ĐB 7 dặm/h', daytimeState: 'Chủ yếu có mây. Cao 33độ C. Gió ĐB ở tốc độ 5 đến 10 dặm/giờ.', nightState: 'Giông bão. Thấp 25độ C. Gió BĐB và có thể thay đổi. Khả năng có mưa 70%.', humidity: 63, UVlevel: '10 / 10', sunRise: '5:41', sunSet: '18:07', moonRise: '18:58', moonSet: '1:59' },
    { date: 'Th ' + (this.today.getDay() + 3) + ' ' + (this.today.getDate() + 2), daytimeTemperature: 29, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 97, wind: 'BĐB 7 dặm/h', daytimeState: 'Giông bão. Cao 29độ C. Gió BĐB ở tốc độ 5 đến 10 dặm/giờ. Khả năng có mưa 100%.', nightState: 'Giông bão. Thấp 24độ C. Gió B ở tốc độ 5 đến 10 dặm/giờ. Khả năng có mưa 90%.', humidity: 84, UVlevel: '6 / 10', sunRise: '5:41', sunSet: '18:06', moonRise: '16:50', moonSet: '3:07' },
    { date: 'Th ' + (this.today.getDay() + 4) + ' ' + (this.today.getDate() + 3), daytimeTemperature: 28, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 82, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay() + 5) + ' ' + (this.today.getDate() + 4), daytimeTemperature: 30, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 89, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'CN ' + ' ' + (this.today.getDate() + 5), daytimeTemperature: 29, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 68, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay()) + ' ' + (this.today.getDate() + 6), daytimeTemperature: 30, nightTemperature: 24, dayImage: '../../assets/img/heavy-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão', rain: 72, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay() + 1) + ' ' + (this.today.getDate() + 7), daytimeTemperature: 31, nightTemperature: 24, dayImage: '../../assets/img/small-rain.png', nightImage: '../../assets/img/heavy-rain.png', status: 'Giông Bão Rải Rác', rain: 55, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay() + 2) + ' ' + (this.today.getDate() + 8), daytimeTemperature: 31, nightTemperature: 24, dayImage: '../../assets/img/small-rain.png', nightImage: '../../assets/img/small-rain.png', status: 'Giông Bão Rải Rác', rain: 56, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },
    { date: 'Th ' + (this.today.getDay() + 3) + ' ' + (this.today.getDate() + 9), daytimeTemperature: 32, nightTemperature: 24, dayImage: '../../assets/img/sunrise.png', nightImage: '../../assets/img/small-rain.png', status: 'Trời nắng', rain: 60, wind: 'BĐB 7 dặm/h', daytimeState: '', nightState: '', humidity: 49, UVlevel: 'Cực điểm', sunRise: '5:41', sunSet: '18:08', moonRise: '15:01', moonSet: '0:53' },

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
