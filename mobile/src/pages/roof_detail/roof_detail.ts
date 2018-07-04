import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaintainanceAdvicePage } from '../maintainance_advice/maintainance_advice';
import { RoofCleanPage } from '../roof_clean/roof_clean';
import { FileRecordingPage } from '../fileRecording/fileRecording';
import { FileRecordingMJOBSubtaskPage } from '../file_recording_MJOB_subtask/file_recording_MJOB_subtask';

@Component({
  selector: 'page-roof_detail',
  templateUrl: 'roof_detail.html'
})
export class RoofDetailPage {

  constructor(public navCtrl: NavController) {
    
  }

  editImage() {
    console.log("image edit");
  }

  editRoof() {
    console.log("roof edit");
  }

  adviesClick() {
    this.navCtrl.push(MaintainanceAdvicePage)
  }

  roofClean() {
    this.navCtrl.push(RoofCleanPage)
  }
  
  fileRecording() {
    this.navCtrl.push(FileRecordingPage)
  }

  fileRecordingMJOB() {
    this.navCtrl.push(FileRecordingMJOBSubtaskPage)
  }

}
