import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GOneLvOnePageRoutingModule } from './g-one-lv-one-routing.module';

import { GOneLvOnePage } from './g-one-lv-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GOneLvOnePageRoutingModule
  ],
  declarations: [GOneLvOnePage]
})
export class GOneLvOnePageModule {}
