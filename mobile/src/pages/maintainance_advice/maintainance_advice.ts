import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InspectingRoofSurfacePage } from '../inspecting_roof_surface/inspecting_roof_surface';

@Component({
  selector: 'page-maintainance_advice',
  templateUrl: 'maintainance_advice.html'
})
export class MaintainanceAdvicePage {

  documentNumber: any;

  constructor(public navCtrl: NavController) {
    this.documentNumber = 1
  }

  adviceDetail() {
    this.navCtrl.push(InspectingRoofSurfacePage);
  }

  statusClick() {
    console.log(123)
  }

}
