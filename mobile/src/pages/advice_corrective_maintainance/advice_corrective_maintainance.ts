import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssessmentCorrectiveMaintainancePage } from '../assessment_corrective_maintainance/assessment_corrective_maintainance';

@Component({
    selector: 'page-advice_corrective_maintainance',
    templateUrl: 'advice_corrective_maintainance.html'
})
export class AdviceCorrectiveMaintainancePage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    openAssesmentAdvice() {
        this.navCtrl.push(AssessmentCorrectiveMaintainancePage)
    }

}
