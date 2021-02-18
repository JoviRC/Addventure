import { Component, OnInit } from '@angular/core';
import { BtgamemodeService } from "../../servicios/btgamemode.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { Location } from '@angular/common';
import { ReadService } from "../../servicios/read.service";
import * as firebase from 'firebase';

interface intMision {
  dificultad: string
  estado: boolean
  id: string
  tipoJuego: string
  tipoOperador: string
  idmis: string
}

@Component({
  selector: 'app-mision',
  templateUrl: './mision.page.html',
  styleUrls: ['./mision.page.scss'],
})
export class MisionPage implements OnInit {

  public arDatosMis: any = []
  activarP: boolean

  constructor(public readservice: ReadService, private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore, private _location: Location) { }

  ngOnInit() {
    this.nfDatosWeb()
  }

  backClicked() {
    this._location.back();
  }

  nfDatosWeb() {
    var uid = this.AFauth.auth.currentUser.uid
    this.readservice.fnDatosMision().subscribe(doc => {
      const doc1 = doc.filter(fuid => fuid.uid == uid)
      const data = doc1.filter(fEstado => fEstado.estado == true)
      this.arDatosMis = data
    })
  }

  fnRedireccion(intMision) {
    this.playAudioBtn()
    setTimeout(() => {
      var uid = this.AFauth.auth.currentUser.uid
      var tipoGame: string = intMision.tipoJuego
      var misCoin: number = intMision.coin
      var idMis = intMision.idMis

      const upMis = this.db.collection('misiones').doc(idMis)
      upMis.update({ estado:false })
      const upUser = this.db.collection('usersAlumnos').doc(uid)
      const increment = firebase.firestore.FieldValue.increment(misCoin)
      upUser.update({ coin: increment })

      if (tipoGame == 'SumaResta') {
        this.router.navigateByUrl('/game-one-intro')
      }
      if (tipoGame == 'Numeros') {
        this.router.navigateByUrl('/game-two-intro')
      }
      if (tipoGame == 'Quiz') {
        this.router.navigateByUrl('/game-three-intro')
      }
    }, 700);

  }

  fnRuterPlay() {
    this.playAudioBtn()
    setTimeout(() => {
      this.router.navigateByUrl('/game-mode')
    }, 700);
  }

  playAudioBtn() {
    const audio = new Audio('../assets/audios/button.mp3')
    audio.volume = 0.5
    audio.play()
  }








}
