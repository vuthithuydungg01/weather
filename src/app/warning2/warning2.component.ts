import { Component, OnInit } from '@angular/core';

interface Pollutants {
  strokeDasharray: string;
  stroke: string;
  value: number;
  pollutantName: string;
  pollutantCategory: string;
  pollutantMeasurement: string
}

@Component({
  selector: 'app-warning2',
  templateUrl: './warning2.component.html',
  styleUrls: ['../app.component.css', '../main/main.component.css','../warning1/warning1.component.css', './warning2.component.css']
})
export class Warning2Component implements OnInit {
  data : Pollutants[] = [
    {strokeDasharray: '113.09733552923254 169.64600329384882', stroke: '#FF0000', value: 152, pollutantName: 'PM2.5 (Chất dạng hạt dưới 2.5 micron)', pollutantCategory: 'Không tốt cho sức khỏe', pollutantMeasurement: '60.76 μg/m3'},
    {strokeDasharray: '28.274333882308134 169.64600329384882', stroke: '#00E838', value: 3, pollutantName: 'NO2 (Nitrogen Dioxide)', pollutantCategory: 'Tốt', pollutantMeasurement: '5.54 μg/m3'},
    {strokeDasharray: '28.274333882308134 169.64600329384882', stroke: '#00E838', value: 44, pollutantName: 'O3 (Ozone)', pollutantCategory: 'Tốt', pollutantMeasurement: '169.27 μg/m3'},
    {strokeDasharray: '28.274333882308134 169.64600329384882', stroke: '#00E838', value: 14, pollutantName: 'SO2 (Sulfur Dioxide)', pollutantCategory: 'Tốt', pollutantMeasurement: '24.83 μg/m3'},
    {strokeDasharray: '56.54866776461627 169.64600329384882', stroke: '#FFFF24', value: 69, pollutantName: 'PM10 (Chất dạng hạt dưới 10 micron)', pollutantCategory: 'Trung bình', pollutantMeasurement: '122.72 μg/m3'},
    {strokeDasharray: '28.274333882308134 169.64600329384882', stroke: '#00E838', value: 8, pollutantName: 'CO (Carbon Monoxide)', pollutantCategory: 'Tốt', pollutantMeasurement: '645.16 μg/m3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
