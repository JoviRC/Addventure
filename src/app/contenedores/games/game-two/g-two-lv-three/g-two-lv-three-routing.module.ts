import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GTwoLvThreePage } from './g-two-lv-three.page';

const routes: Routes = [
  {
    path: '',
    component: GTwoLvThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GTwoLvThreePageRoutingModule {}
