import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionPage } from './mision.page';

const routes: Routes = [
  {
    path: '',
    component: MisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisionPageRoutingModule {}
