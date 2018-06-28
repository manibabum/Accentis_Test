import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoofConstructionDataAddPage } from '../roof_construction_data_add/roof_construction_data_add';

@Component({
    selector: 'page-roof_construction_part',
    templateUrl: 'roof_construction_part.html'
})
export class RoofConstructionPartPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    addRecord() {
        this.navCtrl.push(RoofConstructionDataAddPage)
    }

    selectAll() {
        
    }
}
