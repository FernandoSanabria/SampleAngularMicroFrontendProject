import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicMicroModule } from 'src/shared/dynamic-micro/dynamic-micro.module';
import { Feature2Component } from './feature2.component';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component
  }
];

@NgModule({
  imports: [DynamicMicroModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
