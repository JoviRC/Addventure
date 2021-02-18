import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BtgamemodeService } from "../../servicios/btgamemode.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { ReadService } from "../../servicios/read.service";

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {

  public arDatos: any = []
  public arRecUser: any = []
  public arUser: any = []

  constructor(public readservice: ReadService, private db: AngularFirestore, private _location: Location, private btService: BtgamemodeService, private AFauth: AngularFireAuth) { }

  curso: string
  colegio: string
  userCoin: number

  ngOnInit() {
    this.fnGetDatosRecompensas()
  }

  backClicked() {
    this._location.back();
  }

  fnGetDatosRecompensas() { // esta wea ta bien 
    var _id = this.AFauth.auth.currentUser.uid
    this.readservice.fnDatosUserTest().subscribe(doc => {
      let d1 = doc.filter(data => data.uid == _id)
      this.arUser = d1
      d1.forEach(doc => {
        this.readservice.fnDatoRecompensas().subscribe(doc => {
          let data = doc.filter(estado => estado.estado == true)
          let dat = data.filter(RID => RID.uid == _id)
          this.arDatos = dat
        })
      })
    })
  }
  fnPullRecompensa(intRecompensa , usuarioReg) {
    if (usuarioReg.coin >=  intRecompensa.coins) {
    const updateUser = this.db.collection('usersAlumnos').doc(usuarioReg.uid)
    updateUser.update({coin: usuarioReg.coin - intRecompensa.coins })
    const updateRecomp = this.db.collection('recompensas').doc(intRecompensa.idRec)
    updateRecomp.update({estado: false})
    var lev = document.getElementById('modalCoinSuficiente')
    lev.style.opacity = '1'
    lev.style.pointerEvents = 'auto'
    }else{
      var lev = document.getElementById('modalCoinInsuficiente')
      lev.style.opacity = '1'
      lev.style.pointerEvents = 'auto'
    }
  }
  fnPushToHide() {
    var lev = document.getElementById('modalCoinSuficiente')
    lev.style.opacity = '0'
    lev.style.pointerEvents = 'none'
    var lev = document.getElementById('modalCoinInsuficiente')
    lev.style.opacity = '0'
    lev.style.pointerEvents = 'none'
  }


}
