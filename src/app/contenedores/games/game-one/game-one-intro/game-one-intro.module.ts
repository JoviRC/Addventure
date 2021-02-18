import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameOneIntroPageRoutingModule } from './game-one-intro-routing.module';

import { GameOneIntroPage } from './game-one-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameOneIntroPageRoutingModule
  ],
  declarations: [GameOneIntroPage]
})
export class GameOneIntroPageModule {}
