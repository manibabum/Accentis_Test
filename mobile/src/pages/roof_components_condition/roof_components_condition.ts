import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvicePlannedMaintainancePage } from '../advice_planned_maintainance/advice_planned_maintainance';

@Component({
    selector: 'page-roof_components_condition',
    templateUrl: 'roof_components_condition.html'
})
export class RoofComponentsConditionPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    advice() {
        this.navCtrl.push(AdvicePlannedMaintainancePage)
    }

}
