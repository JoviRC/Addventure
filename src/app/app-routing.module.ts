import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";
import { GameoneGuard } from "./guards/gameone.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate : [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./contenedores/login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./contenedores/registro/registro.module').then( m => m.RegistroPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'perfil-user',
    loadChildren: () => import('./contenedores/perfil-user/perfil-user.module').then( m => m.PerfilUserPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'game-mode',
    loadChildren: () => import('./contenedores/game-mode/game-mode.module').then( m => m.GameModePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'mision',
    loadChildren: () => import('./contenedores/mision/mision.module').then( m => m.MisionPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'game-one-intro',
    loadChildren: () => import('./contenedores/games/game-one/game-one-intro/game-one-intro.module').then( m => m.GameOneIntroPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-one-lv-one',
    loadChildren: () => import('./contenedores/games/game-one/g-one-lv-one/g-one-lv-one.module').then( m => m.GOneLvOnePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-one-lv-two',
    loadChildren: () => import('./contenedores/games/game-one/g-one-lv-two/g-one-lv-two.module').then( m => m.GOneLvTwoPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-one-lv-three',
    loadChildren: () => import('./contenedores/games/game-one/g-one-lv-three/g-one-lv-three.module').then( m => m.GOneLvThreePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'game-two-intro',
    loadChildren: () => import('./contenedores/games/game-two/game-two-intro/game-two-intro.module').then( m => m.GameTwoIntroPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-two-lv-one',
    loadChildren: () => import('./contenedores/games/game-two/g-two-lv-one/g-two-lv-one.module').then( m => m.GTwoLvOnePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-two-lv-two',
    loadChildren: () => import('./contenedores/games/game-two/g-two-lv-two/g-two-lv-two.module').then( m => m.GTwoLvTwoPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-two-lv-three',
    loadChildren: () => import('./contenedores/games/game-two/g-two-lv-three/g-two-lv-three.module').then( m => m.GTwoLvThreePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'game-three-intro',
    loadChildren: () => import('./contenedores/games/game-three/game-three-intro/game-three-intro.module').then( m => m.GameThreeIntroPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'g-three-game',
    loadChildren: () => import('./contenedores/games/game-three/g-three-game/g-three-game.module').then( m => m.GThreeGamePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./contenedores/recompensas/recompensas.module').then( m => m.RecompensasPageModule), canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
