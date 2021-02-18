import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-two-intro',
  templateUrl: './game-two-intro.page.html',
  styleUrls: ['./game-two-intro.page.scss'],
})
export class GameTwoIntroPage implements OnInit {

  constructor(public router: Router,  private _location: Location) { }

  ngOnInit() {
    this.playAudio()
  }

  backClicked() {
    this._location.back();
  }
  navegar(){
    setTimeout(() => {
          location.replace('/g-two-lv-one')
    }, 4000);

  }
  
  playAudio(){
    const audio = new Audio('../assets/audios/gameTwo.m4a');
    audio.volume = 1
    audio.play()
    this.navegar()
  }

}
