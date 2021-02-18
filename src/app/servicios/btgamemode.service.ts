import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class BtgamemodeService {

  gOperador: string
  gLevel: string
  
  gBoolMis :boolean
  gidMis:string

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  //Game one Sumas
  async fnSaveTimeGameOne(counter: number) { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    var num = Math.round(counter / 1000)
    const increment = firebase.firestore.FieldValue.increment(num)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ timeTotal: increment })
  }

  async fnSaveContadorTotalGameOne() { // listo para usar
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ contTotal: increment })
  }

  async fnSaveContadorMalasGameOne() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ contMalas: increment })
  }
  //Game one Restas
  async fnSaveTimeRestaGameOne(counter: number) {
    var _id = this.AFauth.auth.currentUser.uid
    var num = Math.round(counter / 1000)
    const increment = firebase.firestore.FieldValue.increment(num)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ timeResta: increment })
  }

  async fnSaveContadorLevelOneGameOne() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ cantLevelOne: increment })
  }

  async fnSaveContadorLevelTwoGameOne() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ cantLevelTwo: increment })
  }

  async fnSaveContadorLevelThreeGameOne() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameOne').doc(_id)
    dataRef.update({ cantLevelThree: increment })
  }

  //game Two
  async fnSaveTimeGameTwo(counter: number) {
    var _id = this.AFauth.auth.currentUser.uid
    var num = Math.round(counter / 1000)
    const increment = firebase.firestore.FieldValue.increment(num)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ timeTotal: increment })
  }

  async fnSaveContadorSumaGameTwo() {
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ contSuma: increment })
  }

  async fnSaveContadorSumasMalasGameTwo() {
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ contSumasMalas: increment })
  }

  async fnSaveContadorRestaGameTwo() {
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ contResta: increment })
  }

  async fnSaveContadorRestasMalasGameTwo() {
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ contRestasMalas: increment })
  }
  
  async fnSaveContadorLevelOneGameTwo() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ cantLevelOne: increment })
  }

  async fnSaveContadorLevelTwoGameTwo() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ cantLevelTwo: increment })
  }

  async fnSaveContadorLevelThreeGameTwo() { // listo para usar 
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(1)
    const dataRef = this.db.collection('gameTwo').doc(_id)
    dataRef.update({ cantLevelThree: increment })
  }

  //misiones
  async fnSaveTimeMision(counterMis: number) {
    var _id = this.gidMis
    var num = Math.round(counterMis / 1000)
    const increment = firebase.firestore.FieldValue.increment(num)
    const dataRef = this.db.collection('misiones').doc(_id)
    dataRef.update({ timeMis: increment })
  }

  //coins
  async fnSaveCoinsGameThreeTrue(){ //Operacion Buena Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsGameThreeFalse(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(10)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsOnelvOne(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(25)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsOnelvTwo(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(50)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsOnelvThree(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsTwolvOne(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(25)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsTwolvTwo(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(50)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  async fnSaveCoinsTwolvThree(){ // Operacion mala Juego Tres
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ coin: increment })
  }

  //exp
  async fnSaveExpGameOneLvOne(){ //EXP Game 1 lv 1
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(25)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameOneLvTwo(){ //EXP Game 1 lv 2
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(50)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameOneLvThree(){ //EXP Game 1 lv 3
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameTwoLvOne(){ //EXP Game 1 lv 1
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(25)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameTwoLvTwo(){ //EXP Game 1 lv 2
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(50)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameTwoLvThree(){ //EXP Game 1 lv 3
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameThreeTrue(){ //EXP Game 1 lv 1
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(100)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnSaveExpGameThreeFalse(){ //EXP Game 1 lv 2
    var _id = this.AFauth.auth.currentUser.uid
    const increment = firebase.firestore.FieldValue.increment(10)
    const dataRef = this.db.collection('usersAlumnos').doc(_id)
    dataRef.update({ exp: increment })
  }

  async fnUpdateCoin(){
    var _id = this.AFauth.auth.currentUser.uid
    this.db.firestore.collection('usersAlumnos')
    .doc(_id)
    .get()
    .then(function (doc) {
      var coin: string = doc.data().coin
      var docCoin = document.getElementById('h1Coin')
      docCoin.innerHTML = coin
    })
  }

}






