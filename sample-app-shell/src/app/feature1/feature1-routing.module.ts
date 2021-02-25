import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicMicroModule } from 'src/shared/dynamic-micro/dynamic-micro.module';
import { Feature1Component } from './feature1.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component
  }
];

@NgModule({
  imports: [DynamicMicroModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
