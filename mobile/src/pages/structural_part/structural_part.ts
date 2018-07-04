import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StructuralDataAddPage } from '../structural_data_add/structural_data_add';

@Component({
    selector: 'page-structural_part',
    templateUrl: 'structural_part.html'
})
export class StructuralPartPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    addStructuralData() {
        this.navCtrl.push(StructuralDataAddPage)
    }

}
