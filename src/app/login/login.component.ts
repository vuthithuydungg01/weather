import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiProcessService } from '../api-process.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email = '';
  // password = '';
  message = '';

  public db1: any[] = [];
  url = 'http://localhost:3000';

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]), //thuoc tinh firstname su dung form control
    password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)])
  })

  get email() {
    return this.contactForm.get('email');
  }
  get password() {
    return this.contactForm.get('password');
  }

  constructor(private router: Router,
              private api: ApiProcessService)
  {
    this.router.navigate(['/#']);

  }

  ngOnInit(): void {
    this.loadData();
    // console.log(this.contactForm.get('email'))

  }

  private loadData() {
    var urlGetData = `${this.url}/users`;
    this.api.getData(urlGetData)
    .subscribe(data => {
      this.db1 = data
    })
  }

  getCheck() {
    console.log(this.contactForm.value);
    let check = false;
    if (check = this.db1.some((db, i) => {
      return this.email?.value === db.email && this.password?.value === db.password;})) {
      this.message = 'Đăng nhập thành công!';
      this.router.navigate(['']);
    }
    else if (check = this.db1.some((db, i) => {
      return this.email?.value === db.email || this.password?.value === db.password;})) {
        this.message = 'Email hoặc password của bạn không chính xác!';
      }
      else {
      this.message = 'Bạn chưa có tài khoản. Vui lòng đăng ký!';
    }

    // console.log(this.email);
    // console.log(this.password);
    // console.log(check)
    // console.log(this.message);

    // this.email = '';
    // this.password = '';
  }
}
