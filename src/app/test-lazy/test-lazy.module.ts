import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLazyRoutingModule } from './test-lazy-routing.module';
import { TestLazyComponent } from './test-lazy.component';


@NgModule({
  declarations: [
    TestLazyComponent
  ],
  imports: [
    CommonModule,
    TestLazyRoutingModule
  ]
})
export class TestLazyModule { }
