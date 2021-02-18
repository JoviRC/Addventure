import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GOneLvThreePage } from './g-one-lv-three.page';

const routes: Routes = [
  {
    path: '',
    component: GOneLvThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GOneLvThreePageRoutingModule {}
