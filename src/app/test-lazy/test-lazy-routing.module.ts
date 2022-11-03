import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLazyComponent } from './test-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: TestLazyComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLazyRoutingModule { }
