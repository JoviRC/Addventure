import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../servicios/read.service";
import { AuthService } from "../../servicios/auth.service";
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage implements OnInit {

  public arUsers: any = []

  constructor(private router: Router, private db: AngularFirestore, public readservice: ReadService, public authservice: AuthService, private _location: Location, private AFauth: AngularFireAuth) { }

  ngOnInit() {
    var _id = this.AFauth.auth.currentUser.uid
    this.readservice.fnDatosUserTest().subscribe(user => {
      let usuario = user.filter(usu => usu.uid == _id)
      this.arUsers = usuario
    })
  }

  Onlogout() {
    this.playAudioBtn()
    setTimeout(() => {
      this.authservice.logOut()
    }, 700);

  }

  backClicked() {
    this._location.back();
  }

  fnRuterMision() {
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/mision')
    }, 700);
  }
  fnRuterRecompensas() {
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/recompensas')
    }, 700);
  }
  playAudioBtn() {
    const audio = new Audio('../assets/audios/button.mp3')
    audio.volume = 0.5
    audio.play()
  }
  fnModallogout() {
    var asd = document.getElementById('modalClose')
    asd.style.opacity = '1'
    asd.style.pointerEvents = 'auto'
  }
  fnNO(){
    var asd = document.getElementById('modalClose')
    asd.style.opacity = '0'
    asd.style.pointerEvents = 'none'
  }


}
