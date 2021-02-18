import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GOneLvThreePageRoutingModule } from './g-one-lv-three-routing.module';

import { GOneLvThreePage } from './g-one-lv-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GOneLvThreePageRoutingModule
  ],
  declarations: [GOneLvThreePage]
})
export class GOneLvThreePageModule {}
