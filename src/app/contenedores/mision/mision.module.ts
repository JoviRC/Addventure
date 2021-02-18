import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisionPageRoutingModule } from './mision-routing.module';

import { MisionPage } from './mision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisionPageRoutingModule
  ],
  declarations: [MisionPage]
})
export class MisionPageModule {}
