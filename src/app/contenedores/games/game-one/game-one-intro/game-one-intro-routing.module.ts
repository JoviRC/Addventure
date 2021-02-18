import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOneIntroPage } from './game-one-intro.page';

const routes: Routes = [
  {
    path: '',
    component: GameOneIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOneIntroPageRoutingModule {}
