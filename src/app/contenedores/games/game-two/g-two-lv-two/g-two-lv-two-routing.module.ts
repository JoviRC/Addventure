import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GTwoLvTwoPage } from './g-two-lv-two.page';

const routes: Routes = [
  {
    path: '',
    component: GTwoLvTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GTwoLvTwoPageRoutingModule {}
