import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseDefectPage } from '../choose_defect/choose_defect';
import { ChooseDefectAddImagePage } from '../choose_defect_add_image/choose_defect_add_image';

@Component({
    selector: 'page-assessment_defects',
    templateUrl: 'assessment_defects.html'
})
export class AssessmentDefectsPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    rating() {
        this.navCtrl.push(ChooseDefectPage)
    }

    addImage() {
        this.navCtrl.push(ChooseDefectAddImagePage)
    }

}
