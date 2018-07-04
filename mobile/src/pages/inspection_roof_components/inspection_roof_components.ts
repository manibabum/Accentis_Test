import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssessmentDefectsPage } from '../assessment_defects/assessment_defects';

@Component({
    selector: 'page-inspection_roof_components',
    templateUrl: 'inspection_roof_components.html'
})
export class InspectionRoofComponentsPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    openAssesmentDefects() {
        debugger
        this.navCtrl.push(AssessmentDefectsPage)
    }

}
