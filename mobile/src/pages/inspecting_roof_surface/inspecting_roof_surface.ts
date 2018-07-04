import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-inspecting_roof_surface',
    templateUrl: 'inspecting_roof_surface.html'
})
export class InspectingRoofSurfacePage {

    documentNumber: any;
    wood: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    updateWood() {
        console.log('wood new state:' + this.wood);
    }
}
