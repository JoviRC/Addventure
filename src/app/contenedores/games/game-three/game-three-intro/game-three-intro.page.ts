import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-three-intro',
  templateUrl: './game-three-intro.page.html',
  styleUrls: ['./game-three-intro.page.scss'],
})
export class GameThreeIntroPage implements OnInit {

  constructor(public router: Router, private _location: Location) { }

  ngOnInit() {
    this.playAudio()
  }

  backClicked() {
    this._location.back();
  }
  navegar() {
    setTimeout(() => {
      this.router.navigateByUrl('/g-three-game')
  }, 3000);

}

playAudio(){
  const audio = new Audio('../assets/audios/gameThree.m4a')
  audio.volume = 1
  audio.play()
  this.navegar()
}

}
