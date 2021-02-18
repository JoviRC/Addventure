import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-one-intro',
  templateUrl: './game-one-intro.page.html',
  styleUrls: ['./game-one-intro.page.scss'],
})
export class GameOneIntroPage implements OnInit {

  constructor(public router: Router,  private _location: Location) { }

  ngOnInit() {
    this.playAudio()
  }

  backClicked() {
    this._location.back();
  }
  navegar(){
    setTimeout(() => {
          location.replace('/g-one-lv-one')
    }, 7000);
  }
  
  playAudio(){
    const audio = new Audio('../assets/audios/gameOne.m4a')
      audio.volume = 1
    audio.play()
    this.navegar()
  }



}
