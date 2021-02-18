import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GThreeGamePage } from './g-three-game.page';

const routes: Routes = [
  {
    path: '',
    component: GThreeGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GThreeGamePageRoutingModule {}
