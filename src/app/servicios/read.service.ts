import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';

export interface usuario {
  apeAlumn: string
  apeApod: string
  cursoAlumn: string
  email: string
  experiencia: string
  imgPerfil: string
  key: string
  level: string
  nomAlumn: string
  nomApod: string
  school: string
  uid: string
  exp: number
  coin: number
}
export interface usuarioReg {
  apeAlumn: string
  apeApod: string
  cursoAlumn: string
  email: string
  experiencia: string
  imgPerfil: string
  key: string
  level: string
  nomAlumn: string
  nomApod: string
  school: string
  uid: string
  exp: number
  coin: number
}
export interface intRecompensa {
  coins:number
  cursoAlumn:string
  estado:boolean
  recomp:string
  school:string
  uid:string
  idRec:string
  name:string
  lastname:string
}
export interface intMision {
  curso: string
  estado: boolean
  uid: string
  idGameThree: string
  timeMis: number
  tipoJuego: string
  idMis: string
  coin:number
}
export interface intSerial{
  key:string
  estado: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }


  fnDataUser() {
    const uid: string = this.AFauth.auth.currentUser.uid
    return this.db.collection('usersAlumnos').doc(uid).snapshotChanges()
  }
  fnDatosUserTest(){
    return this.db.collection('usersAlumnos').snapshotChanges().pipe(map(recom => {
      return recom.map(a => {
        const data = a.payload.doc.data() as usuarioReg;
          data.uid = a.payload.doc.id;
            return data
      });
    }))
  }

  fnDatoRecompensas() { // esta wea ta bien 
    return this.db.collection('recompensas').snapshotChanges().pipe(map(recom => {
      return recom.map(a => {
        const data = a.payload.doc.data() as intRecompensa;
          data.idRec = a.payload.doc.id;
            return data
      });
    }))
  }

  fnDatosMision(){
    return this.db.collection('misiones').snapshotChanges().pipe(map(recom=>{
      return recom.map(doc =>{
        const data = doc.payload.doc.data() as intMision
        data.idMis = doc.payload.doc.id
        return data
      })
    }))
  }
  fnDatosSerial(){
    return this.db.collection('serial').snapshotChanges().pipe(map(snap =>{
      return snap.map(doc=> {
        const data  = doc.payload.doc.data() as intSerial
        data.key = doc.payload.doc.id
        return data
      })
    }))
  }
}

