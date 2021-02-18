import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GOneLvTwoPageRoutingModule } from './g-one-lv-two-routing.module';

import { GOneLvTwoPage } from './g-one-lv-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GOneLvTwoPageRoutingModule
  ],
  declarations: [GOneLvTwoPage]
})
export class GOneLvTwoPageModule {}
