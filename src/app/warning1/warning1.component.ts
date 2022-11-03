import { Component, OnInit } from '@angular/core';

interface Tips {
  img: string;
  span: string;
  div: string;
}

@Component({
  selector: 'app-warning1',
  templateUrl: './warning1.component.html',
  styleUrls: ['../app.component.css', '../main/main.component.css','./warning1.component.css']
})
export class Warning1Component implements OnInit {
  data : Tips[] = [
    {img: '../../assets/img/tip1.8.png', span: 'Tắm rửa sau khi ở ngoài trời — ', div: 'Để loại bỏ lượng phấn hoa bám vào người khi bạn ở bên ngoài, hãy tắm rửa và thay quần áo.'},
    {img: '../../assets/img/tip2.b.png', span: 'Giảm thiểu phấn hoa trong nhà — ', div: 'Luôn đóng cửa sổ và sử dụng máy lạnh hoặc máy lọc HEPA để lọc tác nhân gây dị ứng.'},
    {img: '../../assets/img/tip3.b.png', span: 'Xem Thời tiết — ', div: 'Tìm hiểu khi nào những điều kiện như gió làm tăng lượng phấn hoa để bạn có thể chuẩn bị.'},
    {img: '../../assets/img/tip4.1.png', span: 'Biết rõ các lựa chọn giảm nhẹ tình trạng dị ứng của bạn — ', div: 'Hãy trao đổi với bác sĩ của bạn về các lựa chọn từ sử dụng thuốc đến bình xịt mũi.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
