import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUserPageRoutingModule } from './perfil-user-routing.module';

import { PerfilUserPage } from './perfil-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUserPageRoutingModule
  ],
  declarations: [PerfilUserPage]
})
export class PerfilUserPageModule {}
