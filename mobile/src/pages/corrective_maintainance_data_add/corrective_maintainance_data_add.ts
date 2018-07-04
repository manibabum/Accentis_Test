import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-corrective_maintainance_data_add',
    templateUrl: 'corrective_maintainance_data_add.html'
})
export class CorrectiveMaintainanceDataAddPage {

    documentNumber: any;
    selectedResult: any;
    selectedMeasure: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.documentNumber = 1
    }

    dropdownMeasure() {
        console.log("dropdown");

        let alert = this.alertCtrl.create();
        alert.setTitle('Maatregel');

        alert.addInput({
            type: 'radio',
            label: 'Reinigen',
            value: 'Reinigen',
            checked: true
        });

        alert.addButton({
            text: 'Opslaan',
            handler: data => {
                console.log('Checkbox data:', data);
                this.selectedMeasure = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: data => {
                this.selectedMeasure = ""
            }
        });

        alert.present();
    }

    add() {
        console.log("save");
    }

    cancel() {
        console.log("cancel");
    }
}
