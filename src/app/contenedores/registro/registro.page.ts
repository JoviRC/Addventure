import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { ReadService } from "../../servicios/read.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public email: string
  public password: string
  public passCon: string
  public nomAlumn: string
  public apeAlumn: string
  public cursoAlumn: string
  public school: string
  public key: string
  public nomApod: string
  public apeApod: string

  public arUsers: any = []
  arBoolean: any = [false, false, false]

  constructor(public readservice: ReadService, private auth: AuthService, public router: Router, private db: AngularFirestore) { }

  ngOnInit() {
    this.fnUser()
  }

  fnUser() {
    var curso = ''
    this.readservice.fnDatosUserTest().subscribe(user => {
      user.forEach(doc => {
        if (curso != doc.cursoAlumn) {
          const select = document.getElementById('cursoAlumn')
          select.innerHTML += '<ion-select-option  value="' + doc.cursoAlumn + '" >' + doc.cursoAlumn + '</ion-select-option>'
        }
      })
    })
  }



  OnSubmitRegister() {


    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < this.password.length)) {
      if (this.password .charAt(cont) == " ")
        espacios = true;
      cont++;
    }

    if (espacios) {
      alert("La contraseña no puede contener espacios en blanco");
      return false;
    }

    var modalDatos = document.getElementById('modalDatos')
    var h1Info = document.getElementById('h1Info')
    if (this.password !== this.passCon, this.password == null) {
      modalDatos.style.opacity = '1'
      modalDatos.style.pointerEvents = 'auto'
      modalDatos.style.zIndex = '1'
      setTimeout(() => {
        modalDatos.style.opacity = '0'
        modalDatos.style.pointerEvents = 'none'
      }, 3000);
      //alert('Error en contraseñas')
    } else {
      this.auth.testkey(this.key)
        .then(auth => {
          this.auth.register(this.email, this.password, this.nomAlumn, this.apeAlumn, this.cursoAlumn, this.school, this.key, this.nomApod, this.apeApod)
            .then(auth => {
              this.auth.updateSerial(this.key)
              this.auth.logOut()
              this.router.navigate(['/login'])
            }).catch(err => {
              h1Info.innerHTML = 'Ingrese bien los datos '
              modalDatos.style.opacity = '1'
              modalDatos.style.pointerEvents = 'auto'
              modalDatos.style.zIndex = '1'
              setTimeout(() => {
                modalDatos.style.opacity = '0'
                modalDatos.style.pointerEvents = 'none'
                h1Info.innerHTML = ''
              }, 3000);
            })
        }).catch(err => {
          h1Info.innerHTML = 'Error en la Serial'
          modalDatos.style.opacity = '1'
          modalDatos.style.pointerEvents = 'auto'
          modalDatos.style.zIndex = '1'
          setTimeout(() => {
            modalDatos.style.opacity = '0'
            modalDatos.style.pointerEvents = 'none'
            h1Info.innerHTML = ''
          }, 3000);
        })
    }
  }

}
