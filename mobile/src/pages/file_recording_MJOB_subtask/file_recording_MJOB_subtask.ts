import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdviceCorrectiveMaintainancePage } from '../advice_corrective_maintainance/advice_corrective_maintainance';
import { RoofComponentsConditionPage } from '../roof_components_condition/roof_components_condition';

@Component({
  selector: 'page-file_recording_MJOB_subtask',
  templateUrl: 'file_recording_MJOB_subtask.html'
})
export class FileRecordingMJOBSubtaskPage {

  documentNumber: any;

  constructor(public navCtrl: NavController) {
    this.documentNumber = 1
  }

  adviceCorrectiveMaintainance() {
    this.navCtrl.push(AdviceCorrectiveMaintainancePage);
  }

  advicePlannedMaintainance() {
    this.navCtrl.push(RoofComponentsConditionPage);
  }

}
