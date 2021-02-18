import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BtgamemodeService } from "../../../../servicios/btgamemode.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-g-two-lv-one',
  templateUrl: './g-two-lv-one.page.html',
  styleUrls: ['./g-two-lv-one.page.scss'],
})
export class GTwoLvOnePage implements OnInit {

  numOne = null
  numTwo = null
  numTotal = null
  ope = null
  lastTot = 0
  trueBt = null
  arBtn = [0, 0]
  currentGame = 1
  //timer
  public misbool: boolean = this.gService.gBoolMis
  counter: number;
  timerRef;
  running: boolean = false;

  constructor(public router: Router, private gService: BtgamemodeService) { }

  ngOnInit() {
    this.fnNums()
    this.fnCurrentGame()
    //this.fnPrintNums()
    this.playAudio()
  }

  fnNums() { // Rellena numOne y numTwo random y previene repeticiones con el juego anteriro.
    this.clearTimer()
    this.startTimer()
    this.gService.fnSaveContadorLevelOneGameTwo()
    const i = Math.floor(Math.random() * (2 - 0)) + 0;
    if (i == 1) {
      this.ope = '+'
      do {
        this.numOne = Math.floor(Math.random() * (9 - 1)) + 1;
        this.numTwo = Math.floor(Math.random() * (9 - 1)) + 1;
        this.numTotal = this.numOne + this.numTwo
      } while (this.numTotal >= 9 || this.lastTot == this.numTotal);
      this.gService.fnSaveContadorSumaGameTwo();
    }
    else {
      this.ope = '-'
      do {
        this.numOne = Math.floor(Math.random() * (9 - 1)) + 1;
        this.numTwo = Math.floor(Math.random() * (9 - 1)) + 1;
        this.numTotal = this.numOne - this.numTwo
      } while (this.numTotal >= 9 || this.numTotal <= 0 || this.lastTot == this.numTotal);
      this.gService.fnSaveContadorRestaGameTwo()
    }
    this.lastTot = this.numTotal
  }
  fnPrintNums() { // Inserta respuesta correcta en un btn random.
    this.trueBt = Math.floor(Math.random() * (2 - 0)) + 0;
    do {
      this.arBtn[0] = Math.floor(Math.random() * (9 - 1)) + 1;
      this.arBtn[1] = Math.floor(Math.random() * (9 - 1)) + 1;
      this.arBtn[this.trueBt] = this.numTotal
    } while (this.arBtn[0] == this.arBtn[1]);
  }
  fnCurrentGame(){
    if (this.currentGame < 4) {
      this.fnNums()
      this.fnPrintNums()
    }
    else{
      setTimeout(() => {
        var lev = document.getElementById('modalLevelTwo')
        lev.style.opacity = '1'
        lev.style.pointerEvents = 'auto'
      }, 500);
      setTimeout(() => {
        var lev = document.getElementById('modalLevelTwo')
        lev.style.opacity = '0'
        lev.style.pointerEvents = 'none'
        this.currentGame = 1
        location.replace('/g-two-lv-two')
      }, 2500);
    }
  }
  fnSelectBtnOne() { //comprueba btn 1
      if (this.arBtn[0] == this.numTotal) {
        //true
        this.startTimer()
        this.gService.fnSaveTimeGameTwo(this.counter)
        this.clearTimer()
        setTimeout(() => {
          var mod = document.getElementById('modalTrue')
          mod.style.opacity = '1'
          mod.style.pointerEvents = 'auto'
          this.gService.fnSaveCoinsTwolvOne()
          this.gService.fnSaveExpGameTwoLvOne()
          this.playAudioBueno()
        }, 500);
        setTimeout(() => {
          var mod = document.getElementById('modalTrue')
          mod.style.opacity = '0'
          mod.style.pointerEvents = 'none'
          this.currentGame = this.currentGame + 1
        }, 2000);
        setTimeout(() => {
          this.fnCurrentGame()
        }, 2500);
      } else {
        //false
        setTimeout(() => {
          if (this.ope = '+') {
            this.gService.fnSaveContadorSumasMalasGameTwo()
          }
          if (this.ope = '-') {
            this.gService.fnSaveContadorRestasMalasGameTwo()
          }
          this.startTimer()
          this.gService.fnSaveTimeGameTwo(this.counter)
          this.clearTimer()
          var mod = document.getElementById('modalFalse')
          mod.style.opacity = '1'
          mod.style.pointerEvents = 'auto'
          this.playAudioMala()
        }, 500);
        setTimeout(() => {
          var mod = document.getElementById('modalFalse')
          mod.style.opacity = '0'
          mod.style.pointerEvents = 'none'
        }, 2000);
        console.log('false')
        setTimeout(() => {
          this.fnCurrentGame()
        }, 2500);
      }
  }
  fnSelectBtnTwo() { // comprueba btn 2
      if (this.arBtn[1] == this.numTotal) {
        //true
        setTimeout(() => {
          this.startTimer()
          this.gService.fnSaveTimeGameTwo(this.counter)
          this.clearTimer()
          var mod = document.getElementById('modalTrue')
          mod.style.opacity = '1'
          mod.style.pointerEvents = 'auto'
          this.gService.fnSaveCoinsTwolvOne()
          this.gService.fnSaveExpGameTwoLvOne()
          this.playAudioBueno()
        }, 500);
        setTimeout(() => {
          var mod = document.getElementById('modalTrue')
          mod.style.opacity = '0'
          mod.style.pointerEvents = 'none'
          this.currentGame = this.currentGame + 1
        }, 2000);
        setTimeout(() => {
          this.fnCurrentGame()
        }, 2500);
      } else {
        // false
        setTimeout(() => {
          if (this.ope = '+') {
            this.gService.fnSaveContadorSumasMalasGameTwo()
          }
          if (this.ope = '-') {
            this.gService.fnSaveContadorRestasMalasGameTwo()
          }
          this.startTimer()
          this.gService.fnSaveTimeGameTwo(this.counter)
          this.clearTimer()
          var mod = document.getElementById('modalFalse')
          mod.style.opacity = '1'
          mod.style.pointerEvents = 'auto'
          this.playAudioMala()
        }, 500);
        setTimeout(() => {
          var mod = document.getElementById('modalFalse')
          mod.style.opacity = '0'
          mod.style.pointerEvents = 'none'
        }, 2000);
        setTimeout(() => {
          this.fnCurrentGame()
        }, 2500);
      }
  }
  //timer
  startTimer() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }
  clearTimer() {
    this.running = false;
    this.counter = undefined;
    clearInterval(this.timerRef);
  }
  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
  fnConfirmBtnClose() {
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '1'
    modal.style.pointerEvents = 'auto'
  }
  playAudioBueno() {
    const audio = new Audio('../assets/audios/good.mp3')
    audio.volume = 0.5
    audio.play()
  }
  playAudioMala() {
    const audio = new Audio('../assets/audios/mala.mp3')
    audio.volume = 0.5
    audio.play()
  }
  playAudio() {
    const audio = new Audio('../assets/audios/gameOneMusic1.mp3')
    audio.volume = 0.5
    audio.play()
  }
  fnBtnModalYes() {
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '0'
    modal.style.pointerEvents = 'none'
    location.replace('/home')
  }
  fnBtnModalNo() {
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '0'
    modal.style.pointerEvents = 'none'
  }
}
