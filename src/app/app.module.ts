import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HourlyComponent } from './hourly/hourly.component';
import { TenDaysComponent } from './ten-days/ten-days.component';
import { MainComponent } from './main/main.component';
import { WeekendComponent } from './weekend/weekend.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { Warning1Component } from './warning1/warning1.component';
import { Warning2Component } from './warning2/warning2.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent,
    TenDaysComponent,
    MainComponent,
    WeekendComponent,
    MonthlyComponent,
    Warning1Component,
    Warning2Component,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
