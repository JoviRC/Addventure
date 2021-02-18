import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameThreeIntroPage } from './game-three-intro.page';

const routes: Routes = [
  {
    path: '',
    component: GameThreeIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameThreeIntroPageRoutingModule {}
