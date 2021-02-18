import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { BtgamemodeService } from "../servicios/btgamemode.service";

@Injectable({
  providedIn: 'root'
})
export class GameoneGuard implements CanActivate {
  constructor(public gameModeService : BtgamemodeService, public router: Router){}
  canActivate(){
    if (this.gameModeService.gLevel === undefined || this.gameModeService.gOperador === undefined) {
      this.router.navigate(['/game-mode'])
      return false
    } else {
      return true
    }
  }
     
}
