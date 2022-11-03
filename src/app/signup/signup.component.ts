import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiProcessService } from '../api-process.service';
import { database } from '../api-process.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css', './signup.component.css']
})
export class SignupComponent implements OnInit {
  url = 'http://localhost:3000';
  // email = '';
  // password = '';
  // confirmPassword = '';
  message = '';
  @ViewChild("myCheck", { read: ElementRef }) checkElm?: ElementRef; //checkElm? chỉ dùng được trong ngAfterViewInit và các hàm trong class (SignUp())

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]), //thuoc tinh firstname su dung form control
    password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])$")]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)])

  })

  get email() {
    return this.contactForm.get('email');
  }
  get password() {
    return this.contactForm.get('password');
  }
  get confirmPassword() {
    return this.contactForm.get('confirmPassword');
  }

  constructor(private api: ApiProcessService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public SignUp() {
    console.log(this.contactForm.value);
    const newUser: database = {};
    newUser.email = this.email?.value ?? undefined;
    newUser.password = this.password?.value ?? undefined;
    console.log(newUser);
    if (this.password?.value === this.confirmPassword?.value) {
      if (this.checkElm?.nativeElement.checked == true) {
        this.message = 'Đăng ký thành công!';
        this.api.addUser(newUser as database).subscribe((data) => {
          console.log('User Added component: ', data);
          this.router.navigate(['login']);
        })
      }
      else {
        this.message = 'Hãy đồng ý với các điều khoản!';
      }
    } else {
      this.message = 'Đăng ký không thành công. Kiểm tra confirm password!';
      //uncheck

    }
    // this.email = '';
    // this.password = '';
    // this.confirmPassword = '';
    // this.checkElm?.nativeElement.checked = 0;
  }

}
