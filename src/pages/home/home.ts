import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaTareaPage } from "../nueva-tarea/nueva-tarea";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nueva_tarea() {
    this.navCtrl.push( NuevaTareaPage );
  }

}
