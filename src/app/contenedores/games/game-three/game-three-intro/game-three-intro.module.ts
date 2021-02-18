import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameThreeIntroPageRoutingModule } from './game-three-intro-routing.module';

import { GameThreeIntroPage } from './game-three-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameThreeIntroPageRoutingModule
  ],
  declarations: [GameThreeIntroPage]
})
export class GameThreeIntroPageModule {}
