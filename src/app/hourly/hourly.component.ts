import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

interface HourlyWeather {
  date: string;
  time: string;
  temperature: string;
  image: string;
  status: string;
  rain: string;
  wind: string;
  humidity: string;
  UVlevel: string;
  cloud: string;
}

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['../app.component.css', '../main/main.component.css', './hourly.component.css']
})
export class HourlyComponent implements OnInit, AfterViewInit {

  public  today = new Date();
  public time = this.today.getHours() + ":" + this.today.getMinutes();
  public date = 'Thứ ' + (this.today.getDay() + 1) + ', ' + this.today.getDate() + ' tháng ' + (this.today.getMonth() + 1);

  data : HourlyWeather[] = [
    {date: 'Thứ ' + (this.today.getDay() + 2) + ', ' + this.today.getDate() + ' tháng ' + (this.today.getMonth() + 1), time: this.today.getHours() + ':00', temperature: '32°', image: '../../assets/img/sunrise.png', status: 'Trời nắng', rain: '0', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: '9 / 10', cloud: '25%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 1 + ':00', temperature: '34°', image: '../../assets/img/sunrise.png', status: 'Trời nắng', rain: '0', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '25%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 2 + ':00', temperature: '34°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '1', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '25%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 3 + ':00', temperature: '35°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '1', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '25%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 4 + ':00', temperature: '35°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '0', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '30%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 5 + ':00', temperature: '36°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '3', wind: 'BTB 5 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '30%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 6 + ':00', temperature: '35°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '2', wind: 'BĐB 7 dặm/h', humidity: '67%', UVlevel: 'Cực điểm', cloud: '30%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 7 + ':00', temperature: '34°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '1', wind: 'BĐB 7 dặm/h', humidity: '60%', UVlevel: '0 / 10', cloud: '30%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 8 + ':00', temperature: '32°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '1', wind: 'BĐB 7 dặm/h', humidity: '60%', UVlevel: '0 / 10', cloud: '55%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 9 + ':00', temperature: '30°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '2', wind: 'BĐB 7 dặm/h', humidity: '60%', UVlevel: '0 / 10', cloud: '55%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + 10 + ':00', temperature: '29°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '0', wind: 'BĐB 7 dặm/h', humidity: '60%', UVlevel: '0 / 10', cloud: '55%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + ':00', temperature: '29°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '2', wind: 'BĐB 7 dặm/h', humidity: '43%', UVlevel: '0 / 10', cloud: '55%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + ':00', temperature: '28°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '2', wind: 'BĐB 7 dặm/h', humidity: '43%', UVlevel: '0 / 10', cloud: '55%'},
    {date: 'Thứ Ba, 6 tháng 9', time: this.today.getHours() + ':00', temperature: '28°', image: '../../assets/img/mostly_cloudy.png', status: 'Nhiều Mây', rain: '2', wind: 'BĐB 7 dặm/h', humidity: '43%', UVlevel: '0 / 10', cloud: '55%'},

]
  // async function(item: HourlyWeather) {
  //   return this.hourlyWeather.push(item)
  // }
  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getElementOpen();
  }

  public getElementOpen() {
    let e = document.getElementsByClassName('DayPartDetail');
    e[0].setAttribute('open', '');
    // console.log(e[0]);
  }

}
