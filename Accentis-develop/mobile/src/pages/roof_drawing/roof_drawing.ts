import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-roof_drawing',
    templateUrl: 'roof_drawing.html'
})
export class RoofDrawingPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

}
