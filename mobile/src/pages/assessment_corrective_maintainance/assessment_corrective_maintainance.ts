import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CorrectiveMaintainanceDataAddPage } from '../corrective_maintainance_data_add/corrective_maintainance_data_add';

@Component({
    selector: 'page-assessment_corrective_maintainance',
    templateUrl: 'assessment_corrective_maintainance.html'
})
export class AssessmentCorrectiveMaintainancePage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    editRecord() {

    }

    deleteRecord() {

    }

    advice() {
        this.navCtrl.push(CorrectiveMaintainanceDataAddPage)
    }

}
