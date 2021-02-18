import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GTwoLvTwoPageRoutingModule } from './g-two-lv-two-routing.module';

import { GTwoLvTwoPage } from './g-two-lv-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GTwoLvTwoPageRoutingModule
  ],
  declarations: [GTwoLvTwoPage]
})
export class GTwoLvTwoPageModule {}
