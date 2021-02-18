import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GTwoLvThreePageRoutingModule } from './g-two-lv-three-routing.module';

import { GTwoLvThreePage } from './g-two-lv-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GTwoLvThreePageRoutingModule
  ],
  declarations: [GTwoLvThreePage]
})
export class GTwoLvThreePageModule {}
