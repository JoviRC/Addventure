import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GTwoLvOnePage } from './g-two-lv-one.page';

const routes: Routes = [
  {
    path: '',
    component: GTwoLvOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GTwoLvOnePageRoutingModule {}
