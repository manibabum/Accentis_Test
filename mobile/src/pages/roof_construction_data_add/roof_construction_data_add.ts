import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-roof_construction_data_add',
    templateUrl: 'roof_construction_data_add.html'
})
export class RoofConstructionDataAddPage {

    documentNumber: any;
    selectedResult: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.documentNumber = 1
    }

    dropdown() {
        console.log("dropdown");

        let alert = this.alertCtrl.create();
        alert.setTitle('Bevestiging');

        alert.addInput({
            type: 'radio',
            label: 'm2',
            value: 'm2',
            checked: true
        });

        alert.addButton({
            text: 'Opslaan',
            handler: data => {
                console.log('Checkbox data:', data);
                this.selectedResult = data;
            }
        });
        alert.addButton({
            text: 'Sluiten',
            handler: data => {
                this.selectedResult = ""
            }
        });

        alert.present();
    }

    add() {
        console.log("add");
    }

    cancel() {
        console.log("cancel");
    }
}
