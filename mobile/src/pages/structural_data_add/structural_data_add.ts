import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-structural_data_add',
    templateUrl: 'structural_data_add.html'
})
export class StructuralDataAddPage {

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
            label: 'Gekleefd',
            value: 'Gekleefd',
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

    save() {
        console.log("save");
    }

    cancel() {
        console.log("cancel");
    }
}
