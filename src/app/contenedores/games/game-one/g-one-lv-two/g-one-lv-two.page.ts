import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BtgamemodeService } from "../../../../servicios/btgamemode.service";


@Component({
  selector: 'app-g-one-lv-two',
  templateUrl: './g-one-lv-two.page.html',
  styleUrls: ['./g-one-lv-two.page.scss'],
})
export class GOneLvTwoPage implements OnInit {

  constructor(private gService: BtgamemodeService, public router: Router) { }

  currentGame = 1
  cant = null
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
  fnGenNum() {
    do {
      this.cant = Math.floor(Math.random() * (10 - 5)) + 5;
    } while (this.cant == this.lastResult);
    this.lastResult = this.cant
  }
  fnPush() {
    const a1 = parseInt(this.getNumBtn)
    const a2 = this.cant

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
          location.replace('/g-one-lv-three')
        }, 4500);

      }
    } else {
      this.fnBtnFalse()
    }
  }

  fnBtnTrue() {
    setTimeout(() => {
      this.gService.fnSaveContadorTotalGameOne()
      this.startTimer()
      this.gService.fnSaveTimeGameOne(this.counter)
      this.clearTimer()
      this.gService.fnSaveContadorLevelTwoGameOne()
      var mod = document.getElementById('modalTrue')
      mod.style.opacity = '1'
      mod.style.pointerEvents = 'auto'
      this.gService.fnSaveCoinsOnelvTwo()
      this.gService.fnSaveExpGameOneLvTwo()
      this.playAudioBueno()
    }, 500);
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
    setTimeout(() => {
      this.gService.fnSaveContadorTotalGameOne()
      this.gService.fnSaveContadorMalasGameOne()
      this.startTimer()
      this.gService.fnSaveTimeGameOne(this.counter)
      this.clearTimer()
      this.gService.fnSaveContadorLevelTwoGameOne()
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
      this.fnGenNum()
      this.clearTimer()
      this.startTimer()
    }, 2500);

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
    audio.volume = 0.7
    audio.play()
  }
  playAudioMala() {
    const audio = new Audio('../assets/audios/mala.mp3')
    audio.volume = 0.7
    audio.play()
  }
  playAudio() {
    const audio = new Audio('../assets/audios/gameOneMusic2.mp3')
    audio.volume = 0.5
    audio.loop = true
    audio.play()
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

}
