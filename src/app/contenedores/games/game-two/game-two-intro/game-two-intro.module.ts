import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameTwoIntroPageRoutingModule } from './game-two-intro-routing.module';

import { GameTwoIntroPage } from './game-two-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameTwoIntroPageRoutingModule
  ],
  declarations: [GameTwoIntroPage]
})
export class GameTwoIntroPageModule {}
