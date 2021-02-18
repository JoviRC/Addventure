import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BtgamemodeService } from "../../../../servicios/btgamemode.service";


@Component({
  selector: 'app-g-two-lv-three',
  templateUrl: './g-two-lv-three.page.html',
  styleUrls: ['./g-two-lv-three.page.scss'],
})
export class GTwoLvThreePage implements OnInit {

  constructor(public router: Router, private gService: BtgamemodeService) { }

  currentGame = 1
  cantOne = null
  cantTwo = null
  cantTotal = null
  varOpe = null
  getNumBtn = '?'
  lastTotal = null
  //timer
  public misbool: boolean = this.gService.gBoolMis
  counter: number;
  timerRef;
  running: boolean = false;
  ngOnInit() {
    this.fnGenOpe()
    this.playAudio()
  }
  fnMain() {
    this.fnPush()
  }

  fnGenOpe() { // tengo que arreglar esta wea y tamos ready 
    this.clearTimer()
    this.startTimer()
    this.gService.fnSaveContadorLevelThreeGameTwo()
    const i = Math.floor(Math.random() * (2 - 0)) + 0;
    if (i == 1) {
      this.varOpe = '+'
      do {
        this.cantOne = Math.floor(Math.random() * (9 - 0)) + 0;
        this.cantTwo = Math.floor(Math.random() * (9 - 0)) + 0;
        this.cantTotal = this.cantOne + this.cantTwo
      } while (this.cantTotal >= 9 || this.cantTotal <= 0 || this.cantTotal == this.lastTotal);
      this.gService.fnSaveContadorRestaGameTwo();
    }
    else {
      this.varOpe = '-'
      do {
        this.cantOne = Math.floor(Math.random() * (9 - 0)) + 0;
        this.cantTwo = Math.floor(Math.random() * (9 - 0)) + 0;
        this.cantTotal = this.cantOne - this.cantTwo
      } while (this.cantTotal >= 9 || this.cantTotal <= 0 || this.lastTotal == this.cantTotal);
      this.gService.fnSaveContadorSumaGameTwo()
    }
    this.lastTotal = this.cantTotal
  }

  fnPush() {
    var a1 = parseInt(this.getNumBtn)
    var a2 = null
    if (this.varOpe == '+') {
      a2 = this.cantOne + this.cantTwo
    }
    if (this.varOpe == '-') {
      a2 = this.cantOne - this.cantTwo
    }
    if (a1 == a2) {
      this.fnBtnTrue()
      if (this.currentGame >= 3) {
        setTimeout(() => {
          var lev = document.getElementById('modalLevelThree')
          this.currentGame = 1
          lev.style.opacity = '1'
          lev.style.pointerEvents = 'auto'
        }, 3000);
        setTimeout(() => {
          var lev = document.getElementById('modalLevelThree')
          lev.style.opacity = '0'
          lev.style.pointerEvents = 'none'
          this.currentGame = 1
          location.replace('/home')
        }, 5000);
      }
    } else {
      this.fnBtnFalse()
    }
  }

  fnBtnTrue() {
    this.startTimer()
    this.gService.fnSaveTimeGameTwo(this.counter)
    this.clearTimer()
    setTimeout(() => {
      var mod = document.getElementById('modalTrue')
      mod.style.opacity = '1'
      mod.style.pointerEvents = 'auto'
      this.gService.fnSaveCoinsTwolvThree()
      this.gService.fnSaveExpGameTwoLvThree()
      this.playAudioBueno()
    }, 700);
    setTimeout(() => {
      var mod = document.getElementById('modalTrue')
      mod.style.opacity = '0'
      mod.style.pointerEvents = 'none'
      this.currentGame = this.currentGame + 1
    }, 2000);
    setTimeout(() => {
      this.fnGenOpe()
    }, 2500);

  }

  fnBtnFalse() {
    setTimeout(() => {
      if (this.varOpe === '+') {
        this.gService.fnSaveContadorSumasMalasGameTwo()
      }
      else {
        this.gService.fnSaveContadorRestasMalasGameTwo()
      }
      this.startTimer()
      this.gService.fnSaveTimeGameTwo(this.counter)
      this.clearTimer()
      this.playAudioMala()
      var mod = document.getElementById('modalFalse')
      mod.style.opacity = '1'
      mod.style.pointerEvents = 'auto'
    }, 700);

    setTimeout(() => {
      var mod = document.getElementById('modalFalse')
      mod.style.opacity = '0'
      mod.style.pointerEvents = 'none'
    }, 2000);
    setTimeout(() => {
      this.fnGenOpe()
    }, 2500);

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
  playAudioBueno() {
    const audio = new Audio('../assets/audios/good.mp3')
    audio.volume = 0.4
    audio.play()
  }
  playAudioMala() {
    const audio = new Audio('../assets/audios/mala.mp3')
    audio.volume = 0.4
    audio.play()
  }
  playAudio() {
    const audio = new Audio('../assets/audios/gameOneMusic3.mp3')
    audio.volume = 0.5
    audio.play()
  }
}
