import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // ngModel comonents
  email:string
  password:string

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmintLogin(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['home'])
    }).catch(err => {
      const a = document.getElementById('modalClose')
      a.style.opacity = '1'
      a.style.pointerEvents = 'auto'
      setTimeout(() => {
        a.style.opacity = '0'
        a.style.pointerEvents = 'none'
      }, 2000);
    })
  }
}
