import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-choose_defect_data_add',
    templateUrl: 'choose_defect_data_add.html'
})
export class ChooseDefectDataAddPage {

    documentNumber: any;
    selectedResult: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.documentNumber = 1
    }

    updateLocal() { 
        
    }

    updateRegular() {
        
    }

    updateEveryWhere() {
        
    }

    updateBegin() {
        
    }

    updateAdvance() {
        
    }

    updateEnd() {
        
    }

    save() {
        console.log("save");
    }

    cancel() {
        console.log("cancel");
    }
}
