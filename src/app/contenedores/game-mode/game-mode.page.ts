import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BtgamemodeService } from "../../servicios/btgamemode.service";
import { Location } from '@angular/common';
import { ReadService } from "../../servicios/read.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.page.html',
  styleUrls: ['./game-mode.page.scss'],
})
export class GameModePage implements OnInit {

  public arUsers: any = []

  public selectGame: string = undefined
  public selectOperatoria: string = undefined
  public selectLevel: string = undefined

  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore, public readservice: ReadService, public authservice: AuthService, private router: Router, private _location: Location) {
  }

  ngOnInit() {
    var _id = this.AFauth.auth.currentUser.uid
    this.readservice.fnDatosUserTest().subscribe(user => {
      let usuario = user.filter(usu => usu.uid == _id)
      this.arUsers = usuario
    })
  }
  playAudioBtn(){
    const audio = new Audio('../assets/audios/button.mp3')
    audio.volume = 0.5
    audio.play()
  }

  fnLevel(usuario) {
    var _id = this.AFauth.auth.currentUser.uid
    const updateUser = this.db.collection('usersAlumnos').doc(_id)
    var userExp = usuario.exp
    if (usuario.exp >= 0 && usuario.exp < 1000) {
      updateUser.update({level: '1'})
    }
    if (usuario.exp >= 1000 && usuario.exp < 2500) {
      updateUser.update({level: '2'})
    }
    if (usuario.exp >= 2500 && usuario.exp < 4000) {
      updateUser.update({level: '3'})
    }
    if (usuario.exp >= 4000 && usuario.exp < 6000) {
      updateUser.update({level: '4'})
    }
    if (usuario.exp >= 6000 && usuario.exp < 9000) {
      updateUser.update({level: '5'})
    }
    if (usuario.exp >= 9000 && usuario.exp < 15000) {
      updateUser.update({level: '6'})
    }
    if (usuario.exp >= 15000 && usuario.exp < 20000) {
      updateUser.update({level: '7'})
    }
    if (usuario.exp >= 20000 && usuario.exp < 30000) {
      updateUser.update({level: '8'})
    }
    if (usuario.exp >= 30000 && usuario.exp < 45000) {
      updateUser.update({level: '9'})
    }
    if (usuario.exp >= 45000 && usuario.exp < 60000) {
      updateUser.update({level: '10'})
    }
  }
  
  backClicked() {
    this._location.back();
  }

  fnRouterGameOne(){
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/game-one-intro')
    }, 700);
  }
  fnRouterGameTwo(){
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/game-two-intro')
    }, 700);
  }
  fnRouterGameThree(){
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/game-three-intro')
    }, 700);
  }
  fnRuterMision() {
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/mision')
    }, 700);
  }
  fnRuterPerfil() {
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/perfil-user')
    }, 700);
  }

}