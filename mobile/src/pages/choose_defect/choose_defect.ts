import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseDefectDataAddPage } from '../choose_defect_data_add/choose_defect_data_add';

@Component({
    selector: 'page-choose_defect',
    templateUrl: 'choose_defect.html'
})
export class ChooseDefectPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    addRecord() {
        this.navCtrl.push(ChooseDefectDataAddPage)
    }

    selectAll() {
        
    }
}
