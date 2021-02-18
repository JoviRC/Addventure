import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GTwoLvOnePageRoutingModule } from './g-two-lv-one-routing.module';

import { GTwoLvOnePage } from './g-two-lv-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GTwoLvOnePageRoutingModule
  ],
  declarations: [GTwoLvOnePage]
})
export class GTwoLvOnePageModule {}
