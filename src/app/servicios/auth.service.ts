import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err))
    })
  }

  logOut() {
    this.AFauth.auth.signOut().then(auth => {
      this.router.navigate(['/login'])
    })
  }
  register(email: string, password: string, nomAlumn: string, apeAlumn: string, cursoAlumn: string, school: string, key: string, nomApod: string, apeApod: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid
        this.db.collection('usersAlumnos').doc(uid).set({
          nomAlumn: nomAlumn,
          apeAlumn: apeAlumn,
          cursoAlumn: cursoAlumn,
          school: school,
          key: key,
          nomApod: nomApod,
          apeApod: apeApod,
          uid: uid,
          level: '1',
          exp: 0,
          imgPerfil: 'avatar-lv-1.jpg',
          coin:0
        })

        this.db.collection('gameOne').doc(uid).set({
          contTotal:0, //ready lv1, lv2, lv3
          contMalas: 0, //ready lv1, lv2, lv3
          timeTotal: 0, //ready lv1, lv2, lv3
          cantLevelOne: 0, //ready
          cantLevelTwo: 0, // ready
          cantLevelThree: 0 // ready
        })

        this.db.collection('gameTwo').doc(uid).set({
          contResta: 0, //1,2,3
          contRestasMalas: 0, //1,2,3
          contSuma: 0, // 1,2,3
          contSumasMalas: 0, //1,2,3
          timeTotal: 0, //1,2,3
          cantLevelOne: 0, //ready
          cantLevelTwo: 0, //ready
          cantLevelThree: 0 //ready
        })

        this.db.collection('gameThree').doc(uid).set({
          cont: 0,
          contMalas: 0,
          time: 0
        })
        
        resolve(res)
      }).catch(err => reject(err))
    })
  }

  testkey(key: string) {
    return new Promise((resolve, reject) => {
      this.db.firestore.collection('serial').where('estado', '==', true).where('key', '==', key)
        .get()
        .then(res => {
          res.forEach(function (doc) {
            if (doc.exists) {
              resolve(res)
            } else {
              reject(res)
            }
          })
        }).catch(err => alert(err))
    })
  }

  updateSerial(key: string) {
    this.db.firestore.collection('serial').doc(key).update({
      estado:false
    })
  }

}//este es el final

