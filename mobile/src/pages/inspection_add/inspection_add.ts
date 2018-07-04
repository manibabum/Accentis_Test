import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-inspection_add',
  templateUrl: 'inspection_add.html'
})
export class InspectionAddPage {

  testCheckboxOpen: boolean;
  selectedResult: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  carryoutInspection() {
    console.log("carryoutInspection");

    let alert = this.alertCtrl.create();
    alert.setTitle('Inspectie uitvoeren');

    alert.addInput({
      type: 'radio',
      label: 'Basis inspectiemethodiek',
      value: 'Basis inspectiemethodiek',
      checked: true
    });

    alert.addButton({
      text: 'Opslaan',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.selectedResult = data;
      }
    });
    alert.addButton({
      text: 'Sluiten',
      handler : data => {
        this.selectedResult = ""
      }
    });
    
    alert.present();
  }

  save() {
    console.log("save")
  }

  cancel() {
    console.log("cancel")
  }

}
