import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameTwoIntroPage } from './game-two-intro.page';

const routes: Routes = [
  {
    path: '',
    component: GameTwoIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameTwoIntroPageRoutingModule {}
