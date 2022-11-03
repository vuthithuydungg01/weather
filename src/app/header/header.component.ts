import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css', './header.component.css']
})
export class HeaderComponent implements OnInit {
  isShow = true;
  public location: any[] = [
    { area: 'Châu Mỹ', detail: [{nation: 'Antigua và Barbuda | English', link: '#'}, {nation: 'Argentina | Español', link: '#'}, {nation: 'Bahamas | English', link: '#'}, {nation: 'Barbados | English', link: '#'}, {nation: 'Belize | English', link: '#'}, {nation: 'Bolivia | Español', link: '#'}, {nation: 'Brazil | Português', link: '#'}, {nation: 'Canada | English', link: '#'}, {nation: 'Canada | Français', link: '#'}, {nation: 'Chile | Español', link: '#'}, {nation: 'Colombia | Español', link: '#'}, {nation: 'Costa Rica | Español', link: '#'}, {nation: 'Dominica | English', link: '#'}, {nation: 'Cộng Hòa Dominica | Español', link: '#'}, {nation: 'Ecuador | Español', link: '#'}, {nation: 'El Salvador | Español', link: '#'}] },
    { area: 'Châu Phi', detail: [{nation: 'Algeria | العربية', link: '#'}, {nation: 'Algeria | Français', link: '#'}, {nation: 'Angola | Português', link: '#'}, {nation: 'Benin | Français', link: '#'}, {nation: 'Burkina Faso | Français', link: '#'}, {nation: 'Burundi | Français', link: '#'}, {nation: 'Cameroon | Français', link: '#'}, {nation: 'Cameroon | English', link: '#'}, {nation: 'Cape Verde | Português', link: '#'}, {nation: 'Cộng Hòa Trung Phi | Français', link: '#'}, {nation: 'Chad | Français', link: '#'}, {nation: 'Chad | العربية', link: '#'}, {nation: 'Comoros | Français', link: '#'}, {nation: 'Comoros | العربية', link: '#'}, {nation: 'Democratic Republic of the Congo | Français', link: '#'}, {nation: 'Cộng Hòa Congo | Français', link: '#'}] },
    { area: 'CHÂU Á THÁI BÌNH DƯƠNG', detail: [{nation: 'Úc | English', link: '#'}, {nation: 'Bangladesh | বাংলা', link: '#'}, {nation: 'Brunei | Bahasa Melayu', link: '#'}, {nation: 'Trung Quốc | 中文', link: '#'}, {nation: 'Hồng Kông | 中文', link: '#'}, {nation: 'Đông Timor | Português', link: '#'}, {nation: 'Fiji | English', link: '#'}, {nation: 'Ấn Độ (Tiếng Anh) | English', link: '#'}, {nation: 'Ấn Độ (Tiếng Hindi) | हिन्दी', link: '#'}, {nation: 'Indonesia | Bahasa Indonesia', link: '#'}, {nation: 'Nhật Bản | 日本語', link: '#'}, {nation: 'Kiribati | English', link: '#'}, {nation: 'Hàn Quốc | 한국어', link: '#'}, {nation: 'Kyrgyzstan | Русский', link: '#'}, {nation: 'Malaysia | Bahasa Melayu', link: '#'}, {nation: 'Quần đảo Marshall | English', link: '#'}] },
    { area: 'CHÂU ÂU', detail: [{nation: 'Andorra | Català', link: '#'}, {nation: 'Andorra | Français', link: '#'}, {nation: 'Áo | Deutsch', link: '#'}, {nation: 'Belarus | Русский', link: '#'}, {nation: 'Bỉ | Dutch', link: '#'}, {nation: 'Bỉ | Français', link: '#'}, {nation: 'Bosnia và Herzegovina | Hrvatski', link: '#'}, {nation: 'Croatia | Hrvatski', link: '#'}, {nation: 'Cyprus | Ελληνικά', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}, {nation: '', link: '#'}] },
    { area: 'TRUNG ĐÔNG', detail: [{nation: 'Bahrain | العربية', link: '#'}, {nation: 'Iran |  فارسى', link: '#'}, {nation: 'Iraq | العربية', link: '#'}, {nation: 'Israel | עִבְרִית', link: '#'}, {nation: 'Jordan | العربية', link: '#'}, {nation: 'Kuwait | العربية', link: '#'}, {nation: 'Lebanon | العربية', link: '#'}, {nation: 'Oman | العربية', link: '#'}, {nation: 'Pakistan |  اردو', link: '#'}, {nation: 'Pakistan | English', link: '#'}, {nation: 'Qatar | العربية', link: '#'}, {nation: 'Saudi Arabia | العربية', link: '#'}, {nation: 'Syria | العربية', link: '#'}, {nation: 'Các Tiểu vương quốc Ả Rập Thống nhất | العربية', link: '#'}] }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openExpandableMenu() {
    this.isShow = !this.isShow;
  }

}
