import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GThreeGamePageRoutingModule } from './g-three-game-routing.module';

import { GThreeGamePage } from './g-three-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GThreeGamePageRoutingModule
  ],
  declarations: [GThreeGamePage]
})
export class GThreeGamePageModule {}
