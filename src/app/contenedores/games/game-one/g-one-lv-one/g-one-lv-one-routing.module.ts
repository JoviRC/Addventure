import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GOneLvOnePage } from './g-one-lv-one.page';

const routes: Routes = [
  {
    path: '',
    component: GOneLvOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GOneLvOnePageRoutingModule {}
