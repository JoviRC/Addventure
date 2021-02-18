import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BtgamemodeService } from "../../../../servicios/btgamemode.service";

@Component({
  selector: 'app-g-one-lv-three',
  templateUrl: './g-one-lv-three.page.html',
  styleUrls: ['./g-one-lv-three.page.scss'],
})
export class GOneLvThreePage implements OnInit {

  constructor(private gService: BtgamemodeService, public router: Router) { }

  currentGame = 1
  cantOne = null
  cantTwo = null
  cantTotal = null
  getNumBtn = '?'
  lastResult = null
  //timer
  public misbool: boolean = this.gService.gBoolMis
  counter: number;
  timerRef;
  running: boolean = false;

  ngOnInit() {
    this.clearTimer()
    this.startTimer()
    this.fnGenNum()
    this.playAudio()
  }

  fnMain() {
    this.fnPush()
  }

  fnPush() {
    const a1 = parseInt(this.getNumBtn)
    const a2 = this.cantOne + this.cantTwo


    if (a1 == a2) {
      this.fnBtnTrue()
      if (this.currentGame >= 3) {
        this.startTimer();
        this.clearTimer();
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
  fnGenNum() {
    do {
      this.cantOne = Math.floor(Math.random() * (9 - 0)) + 0;
      this.cantTwo = Math.floor(Math.random() * (9 - 0)) + 0;
      this.cantTotal = this.cantOne + this.cantTwo
    } while (this.cantTotal == this.lastResult || this.cantTotal >= 10 || this.cantTotal <= 0);
    this.lastResult = this.cantTotal
  }

  fnBtnTrue() {
    this.gService.fnSaveContadorTotalGameOne()
    this.startTimer()
    this.gService.fnSaveTimeGameOne(this.counter)
    this.clearTimer()
    this.gService.fnSaveContadorLevelThreeGameOne()
    this.gService.fnSaveExpGameOneLvThree()
    this.gService.fnSaveCoinsOnelvThree()
    var mod = document.getElementById('modalTrue')
    mod.style.opacity = '1'
    mod.style.pointerEvents = 'auto'
    this.playAudioBueno()
    setTimeout(() => {
      var mod = document.getElementById('modalTrue')
      mod.style.opacity = '0'
      mod.style.pointerEvents = 'none'
      this.currentGame = this.currentGame + 1
    }, 2000);
    setTimeout(() => {
      this.fnGenNum()
      this.clearTimer()
      this.startTimer()
    }, 2500);

  }

  fnBtnFalse() {
    this.gService.fnSaveContadorTotalGameOne()
    this.gService.fnSaveContadorMalasGameOne()
    this.startTimer()
    this.gService.fnSaveTimeGameOne(this.counter)
    this.clearTimer()
    this.gService.fnSaveContadorLevelThreeGameOne()
    var mod = document.getElementById('modalFalse')
    mod.style.opacity = '1'
    mod.style.pointerEvents = 'auto'
    this.playAudioMala()
    setTimeout(() => {
      var mod = document.getElementById('modalFalse')
      mod.style.opacity = '0'
      mod.style.pointerEvents = 'none'
    }, 2000);
    setTimeout(() => {
      this.fnGenNum()
      this.clearTimer()
      this.startTimer()
    }, 2500);

  }
  fnConfirmBtnClose(){
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '1'
    modal.style.pointerEvents = 'auto'
  }
  fnBtnModalYes(){
    location.replace('/home')
  }
  fnBtnModalNo(){
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '0'
    modal.style.pointerEvents = 'none'
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

  playAudioBueno(){
    const audio = new Audio('../assets/audios/good.mp3')
    audio.volume = 0.7
    audio.play()
  }
  playAudioMala(){
    const audio = new Audio('../assets/audios/mala.mp3')
    audio.volume = 0.7
    audio.play()
  }
  playAudio() {
    const audio = new Audio('../assets/audios/gameOneMusic3.mp3')
    audio.volume = 0.5
    audio.play()
  }

}
