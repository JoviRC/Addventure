"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RecompensasPage = void 0;
var core_1 = require("@angular/core");
var firebase = require("firebase");
var RecompensasPage = /** @class */ (function () {
    function RecompensasPage(readservice, db, _location, btService, AFauth) {
        this.readservice = readservice;
        this.db = db;
        this._location = _location;
        this.btService = btService;
        this.AFauth = AFauth;
        this.arDatos = [];
        this.arRecUser = [];
        this.arUser = [];
    }
    RecompensasPage.prototype.ngOnInit = function () {
        //this.fntest()
        // this.fnDatosUser()
        this.fnDataUserRealTime();
        this.fnShowRecompensas();
    };
    RecompensasPage.prototype.backClicked = function () {
        this._location.back();
    };
    RecompensasPage.prototype.Main = function () {
    };
    RecompensasPage.prototype.fnDatosUser = function () {
        var _id = this.AFauth.auth.currentUser.uid;
        this.db.firestore.collection('usersAlumnos')
            .doc(_id)
            .get()
            .then(function (doc) {
            var coin = doc.data().coin;
            return coin;
        });
    };
    RecompensasPage.prototype.fnGetDatosRecompensas = function (usuario) {
        var _this = this;
        this.readservice.fnDatoRecompensas().subscribe(function (doc) {
            var data = doc.payload.data();
            data.idrec = doc.payload.id;
            if (data.cursoAlumn = usuario.cursoAlumn) {
                if () {
                }
                _this.arUser.push(data);
            }
        });
    };
    RecompensasPage.prototype.fnMostrarRecomUser = function (intRecompensa, usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var recSchool, recCurso, userSchool;
            var _this = this;
            return __generator(this, function (_a) {
                recSchool = intRecompensa.school;
                recCurso = intRecompensa.cursoAlumn;
                userSchool = usuario.school;
                this.readservice.fnDatoRecompensas().subscribe(function (doc) {
                    var data = doc.payload.data();
                    data.idrec = doc.payload.id;
                    _this.arUser.push(data);
                });
                return [2 /*return*/];
            });
        });
    };
    RecompensasPage.prototype.fnDataUserRealTime = function () {
        var _this = this;
        this.readservice.fnDataUser().subscribe(function (user) {
            var data = user.payload.data();
            data.uid = user.payload.id;
            _this.arUser.push(data);
        });
    };
    RecompensasPage.prototype.fnShowRecompensas = function () {
        var _this = this;
        var _id = this.AFauth.auth.currentUser.uid;
        this.db.firestore.collection('usersAlumnos').doc(_id).get().then(function (docs) {
            var curso = docs.data().cursoAlumn;
            var school = docs.data().school;
            _this.db.firestore.collection('recompensas')
                .where('school', '==', school)
                .where('cursoAlumn', '==', curso)
                .get()
                .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    if (doc.data().estado == true) {
                        var ref = doc.data();
                        ref.idrec = doc.id;
                        _this.arDatos.push(ref);
                        return doc.data();
                    }
                });
            });
        });
    };
    RecompensasPage.prototype.fnPullRecompensa = function (intRecompensa) {
        var _this = this;
        var costCoin = intRecompensa.coins;
        var idRec = intRecompensa.idrec;
        var _id = this.AFauth.auth.currentUser.uid;
        this.db.firestore.collection('usersAlumnos').doc(_id).get().then(function (snapshot) {
            var coins = snapshot.data().coin;
            if (coins >= costCoin) {
                console.log('Alcanza');
                var resta = firebase.firestore.FieldValue.increment(-costCoin);
                var dataRef = _this.db.collection('usersAlumnos').doc(_id);
                dataRef.update({ coin: resta });
                var upRec = _this.db.collection('recompensas').doc(idRec);
                upRec.update({ estado: false });
                var asd = document.getElementById(idRec);
                asd.style.display = 'none';
                var divMonedas = document.getElementById(_id);
                divMonedas.style.display = 'none';
            }
            else {
                console.log('juega mas');
            }
        });
    };
    RecompensasPage.prototype.fnUpdateCoins = function () {
    };
    RecompensasPage = __decorate([
        core_1.Component({
            selector: 'app-recompensas',
            templateUrl: './recompensas.page.html',
            styleUrls: ['./recompensas.page.scss']
        })
    ], RecompensasPage);
    return RecompensasPage;
}());
exports.RecompensasPage = RecompensasPage;
