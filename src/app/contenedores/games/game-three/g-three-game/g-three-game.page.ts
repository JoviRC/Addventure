import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../../../servicios/read.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { BtgamemodeService } from "../../../../servicios/btgamemode.service";


@Component({
  selector: 'app-g-three-game',
  templateUrl: './g-three-game.page.html',
  styleUrls: ['./g-three-game.page.scss'],
})
export class GThreeGamePage implements OnInit {

  public pack_data = [];
  public random: number
  arNum: any = [0, 1, 2]
  public arNumRandom: any = []

  constructor(public readservice: ReadService, private db: AngularFirestore, private gService: BtgamemodeService) { }

  ngOnInit() {
    this.fnNumRandom()

  }

  fnClickAudio() {
    const ico = document.getElementById('icoAudio1')
    const ico2 = document.getElementById('icoAudio2')
    var a = document.getElementById('h3Instruccion').innerHTML
    const animales = new Audio('../assets/audios/Animales.m4a')
    const contar = new Audio('../assets/audios/Contar.m4a')
    const resta = new Audio('../assets/audios/Resta.m4a')
    const suma = new Audio('../assets/audios/Suma.m4a')
    if (ico.style.display == "block") {
      if (a == 'Animales') {
        animales.play()
      }
      if (a == 'Contar') {
        contar.play()
      }
      if (a == 'Resta') {
        resta.play()
      }
      if (a == 'Suma') {
        suma.play()
      }
      if (a == 'Numeros') {
        contar.play()
      }
      ico.style.display = "none"
      ico2.style.display = "block"
      setTimeout(() => {
        ico.style.display = "block"
        ico2.style.display = "none"
      }, 3000);
    } else {
      if (a == 'Animales') {
        animales.pause()
      }
      if (a == 'Contar') {
        contar.pause()
      }
      if (a == 'Resta') {
        resta.pause()
      }
      if (a == 'Suma') {
        suma.pause()
      }
      if (a == 'Numeros') {
        contar.pause()
      }
      ico.style.display = "block"
      ico2.style.display = "none"
    }

  }
  fnNumRandom() {
    this.arNumRandom = this.desordenar(this.arNum)
    this.db.firestore.collection('gameThreeContent')
      .get()
      .then(res => {
        this.pack_data = [];
        res.forEach(datax => {
          this.pack_data.push({ id: datax.id });
        });
        this.random = Math.floor((Math.random() * this.pack_data.length) + 0);
        this.fnReadGame(this.random)
      })
      .catch(err => {
        alert("ERROR " + err)
      })
  }
  fnReadGame(random: any) {
    var h3Instruccion = document.getElementById('h3Instruccion')
    var divImg1 = document.getElementById('divImg1')
    var divImg2 = document.getElementById('divImg2')
    var divOpe = document.getElementById('divOpe')
    var btnAleternativa1 = document.getElementById('btnAleternativa1')
    var btnAleternativa2 = document.getElementById('btnAleternativa2')
    var btnAleternativa3 = document.getElementById('btnAleternativa3')
    var a1 = this.arNumRandom[0]
    var a2 = this.arNumRandom[1]
    var a3 = this.arNumRandom[2]
    this.db.firestore.collection('gameThreeContent')
      .where('uid', '==', random)
      .limit(1)
      .get()
      .then(function (doc) {
        doc.forEach(function (datos) {
          const tipo = datos.data().tipos
          const acti = datos.data().actividad
          const tipoAlt = datos.data().tipoAlt
          h3Instruccion.innerHTML = datos.data().actividad
          let arAlt: any = [datos.data().altBueno, datos.data().altMaloUno, datos.data().altMaloDos]
          if (acti == 'Suma') {
            if (tipo == 'Numeros') {
              divImg1.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num1 + '.png" alt="alguna wea">'
              divImg2.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num2 + '.png" alt="alguna wea">'
              divOpe.innerHTML = '<h1 class="h1Ope" id="h1Ope" style="font-size: 12vw; margin-top: 6vh; text-align: center; margin-left: 2vw; margin-right: 2vw; ">' + datos.data().ope + '</h1>'
            }
            if (tipo == 'Animales') {
              divImg1.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + datos.data().num1 + '.png" alt="alguna wea">'
              divImg2.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + datos.data().num2 + '.png" alt="alguna wea">'
              divOpe.innerHTML = '<h1 class="h1Ope" id="h1Ope" style="font-size: 12vw; margin-top: 6vh; text-align: center; margin-left: 2vw; margin-right: 2vw; ">' + datos.data().ope + '</h1>'
            }
            if (tipoAlt == 'Numeros') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'

            }
            if (tipoAlt == 'Animales') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
            }
          }
          if (acti == 'Resta') {
            if (tipo == 'Numeros') {
              divImg1.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num1 + '.png" alt="alguna wea">'
              divImg2.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num2 + '.png" alt="alguna wea">'
              divOpe.innerHTML = '<h1 class="h1Ope" id="h1Ope" style="font-size: 12vw; margin-top: 6vh; text-align: center; margin-left: 2vw; margin-right: 2vw; ">' + datos.data().ope + '</h1>'
            }
            if (tipo == 'Animales') {
              divImg1.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + datos.data().num1 + '.png" alt="alguna wea">'
              divImg2.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + datos.data().num2 + '.png" alt="alguna wea">'
              divOpe.innerHTML = '<h1 class="h1Ope" id="h1Ope" style="font-size: 12vw; margin-top: 6vh; text-align: center; margin-left: 2vw; margin-right: 2vw; ">' + datos.data().ope + '</h1>'
            }
            if (tipoAlt == 'Numeros') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'

            }
            if (tipoAlt == 'Animales') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
            }
          }
          if (acti == 'Contar') {
            if (tipo == 'Numeros') {
              divOpe.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num1 + '.png" style="height: 20vh; margin: auto; grid-column: 2; display: block;">'
            }
            if (tipo == 'Animales') {
              divOpe.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + datos.data().num1 + '.png" style="height: 20vh; margin: auto; grid-column: 2; display: block;">'
            }
            if (tipoAlt == 'Numeros') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/img/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
            }
          }
          if (acti == 'Numero') {
            divOpe.innerHTML = '<img src="../../../../../assets/img/' + datos.data().num1 + '.png" alt="alguna wea" style="height: 20vh; margin: auto; grid-column: 2; display: block;">'
            if (tipoAlt == 'Animales') {
              btnAleternativa1.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a1] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa2.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a2] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
              btnAleternativa3.innerHTML = '<img src="../../../../../assets/imgNumAnimales/' + arAlt[a3] + '.png" alt="alguna wea" style="height: 15vh; margin: auto; ">'
            }
          }
        })
      }).catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  fnBtnOne() {
    var a1 = this.arNumRandom[0]
    var a2 = this.arNumRandom[1]
    var a3 = this.arNumRandom[2]
    var booleanCompa: boolean
    var btn1 = document.getElementById('btnAleternativa1')
    var btn2 = document.getElementById('btnAleternativa2')
    var btn3 = document.getElementById('btnAleternativa3')
    var h3Coins = document.getElementById('h3Coins')
    this.db.firestore.collection('gameThreeContent')
      .where('uid', '==', this.random)
      .limit(1)
      .get()
      .then(function (docs) {
        docs.forEach(function (doc) {
          let arAlt: any = [doc.data().altBueno, doc.data().altMaloUno, doc.data().altMaloDos]
          var altBueno = doc.data().altBueno
          if (altBueno == arAlt[a1]) { // If True 
            btn1.style.backgroundColor = "rgb(113, 255, 137)";
            var lev = document.getElementById('modalTrue')
            lev.style.opacity = '1'
            lev.style.pointerEvents = 'auto'
            h3Coins.innerHTML = '100'
            setTimeout(() => {
              btn2.hidden = true
              btn3.hidden = true
            }, 650);
            return booleanCompa = true
          } else { // else False
            btn1.style.backgroundColor = "#dc4a4a"
            setTimeout(() => {
              var lev = document.getElementById('modalTrue')
              lev.style.opacity = '1'
              lev.style.pointerEvents = 'auto'
              h3Coins.innerHTML = '10'
            }, 400);
            setTimeout(() => {
              if (altBueno == arAlt[a2]) {
                btn2.style.backgroundColor = "rgb(113, 255, 137)"
                btn3.hidden = true
              }
              if (altBueno == arAlt[a3]) {
                btn3.style.backgroundColor = "rgb(113, 255, 137)"
                btn2.hidden = true
              }
            }, 650);
            return booleanCompa = false
          }
        })
      }).then(asd => {
        if (booleanCompa == true) {
          this.playAudioBueno()
          this.fncoinTrue()
        }
        if (booleanCompa == false) {
          this.playAudioMala()
          this.fncoinFalse()

        }
      })
  }
  fnBtnTwo() {
    var booleanCompa: boolean
    var a1 = this.arNumRandom[0]
    var a2 = this.arNumRandom[1]
    var a3 = this.arNumRandom[2]
    var btn1 = document.getElementById('btnAleternativa1')
    var btn2 = document.getElementById('btnAleternativa2')
    var btn3 = document.getElementById('btnAleternativa3')
    var h3Coins = document.getElementById('h3Coins')
    this.db.firestore.collection('gameThreeContent')
      .where('uid', '==', this.random)
      .limit(1)
      .get()
      .then(function (docs) {
        docs.forEach(function (doc) {
          let arAlt: any = [doc.data().altBueno, doc.data().altMaloUno, doc.data().altMaloDos]
          var altBueno = doc.data().altBueno
          if (altBueno == arAlt[a2]) { // True
            btn2.style.backgroundColor = "rgb(113, 255, 137)";
            var lev = document.getElementById('modalTrue')
            lev.style.opacity = '1'
            lev.style.pointerEvents = 'auto'
            h3Coins.innerHTML = '100'
            setTimeout(() => {
              btn1.hidden = true
              btn3.hidden = true
            }, 650);
            return booleanCompa = true
          } else { // False
            btn2.style.backgroundColor = "#dc4a4a"
            setTimeout(() => {
              var lev = document.getElementById('modalTrue')
              lev.style.opacity = '1'
              lev.style.pointerEvents = 'auto'
              h3Coins.innerHTML = '10'
            }, 400);
            setTimeout(() => {
              if (altBueno == arAlt[a1]) {
                btn1.style.backgroundColor = "rgb(113, 255, 137)"
                btn3.hidden = true
              }
              if (altBueno == arAlt[a3]) {
                btn3.style.backgroundColor = "rgb(113, 255, 137)"
                btn1.hidden = true
              }
            }, 650);
            return booleanCompa = false
          }
        })
      }).then(asd => {
        if (booleanCompa == true) {
          this.playAudioBueno()
          this.fncoinTrue()
        }
        if (booleanCompa == false) {
          this.playAudioMala()
          this.fncoinFalse()
        }
      })
  }
  fnBtnThree() {
    var booleanCompa: boolean
    var a1 = this.arNumRandom[0]
    var a2 = this.arNumRandom[1]
    var a3 = this.arNumRandom[2]
    var btn1 = document.getElementById('btnAleternativa1')
    var btn2 = document.getElementById('btnAleternativa2')
    var btn3 = document.getElementById('btnAleternativa3')
    var h3Coins = document.getElementById('h3Coins')
    this.db.firestore.collection('gameThreeContent')
      .where('uid', '==', this.random)
      .limit(1)
      .get()
      .then(function (docs) {
        docs.forEach(function (doc) {
          let arAlt: any = [doc.data().altBueno, doc.data().altMaloUno, doc.data().altMaloDos]
          var altBueno = doc.data().altBueno
          if (altBueno == arAlt[a3]) {
            btn3.style.backgroundColor = "rgb(113, 255, 137)";
            var lev = document.getElementById('modalTrue')
            lev.style.opacity = '1'
            lev.style.pointerEvents = 'auto'
            h3Coins.innerHTML = '100'
            setTimeout(() => {
              btn2.hidden = true
              btn1.hidden = true
            }, 650);
            return booleanCompa = true
          } else {
            btn3.style.backgroundColor = "#dc4a4a"
            setTimeout(() => {
              var lev = document.getElementById('modalTrue')
              lev.style.opacity = '1'
              lev.style.pointerEvents = 'auto'
              h3Coins.innerHTML = '10'
            }, 400);
            setTimeout(() => {
              if (altBueno == arAlt[a2]) {
                btn2.style.backgroundColor = "rgb(113, 255, 137)"
                btn1.hidden = true
              }
              if (altBueno == arAlt[a1]) {
                btn1.style.backgroundColor = "rgb(113, 255, 137)"
                btn2.hidden = true
              }
            }, 650);
            return booleanCompa = false
          }
        })

      }).then(asd => {
        if (booleanCompa == true) {
          this.playAudioBueno()
          this.fncoinTrue()
        }
        if (booleanCompa == false) {
          this.playAudioMala()
          this.fncoinFalse()
        }
      })
  }

  fnClickModal() {
    var lev = document.getElementById('modalTrue')
    lev.style.opacity = '0'
    lev.style.pointerEvents = 'none'
    setTimeout(() => {
      var btn1 = document.getElementById('btnAleternativa1')
      var btn2 = document.getElementById('btnAleternativa2')
      var btn3 = document.getElementById('btnAleternativa3')
      var h3Instruccion = document.getElementById('h3Instruccion')
      var divImg1 = document.getElementById('divImg1')
      var divImg2 = document.getElementById('divImg2')
      var divOpe = document.getElementById('divOpe')
      btn1.hidden = false
      btn2.hidden = false
      btn3.hidden = false
      btn1.style.backgroundColor = "rgb(255, 255, 255)"
      btn2.style.backgroundColor = "rgb(255, 255, 255)"
      btn3.style.backgroundColor = "rgb(255, 255, 255)"
      btn1.innerHTML = ""
      btn2.innerHTML = ""
      btn3.innerHTML = ""
      h3Instruccion.innerHTML = ""
      divImg1.innerHTML = ""
      divImg2.innerHTML = ""
      divOpe.innerHTML = '<h1 class="h1Ope" id="h1Ope" style="font-size: 12vw; margin-top: 6vh; text-align: center; margin-left: 2vw; margin-right: 2vw; "></h1>'
      this.fnNumRandom()
    }, 650);

  }

  fncoinTrue() {
    this.gService.fnSaveCoinsGameThreeTrue()
    this.gService.fnSaveExpGameThreeTrue()
  }
  fncoinFalse() {
    this.gService.fnSaveCoinsGameThreeFalse()
    this.gService.fnSaveExpGameThreeFalse()
  }

  desordenar(unArray) {
    //-------Desordena un Array
    var t = unArray.sort(function (a, b) {
      return Math.random() - 0.5
    })
    return [...t]
  }
  fnConfirmBtnClose() {
    var modal = document.getElementById('modalClose')
    modal.style.opacity = '1'
    modal.style.pointerEvents = 'auto'
  }
  fnBtnModalYes() {
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




}
