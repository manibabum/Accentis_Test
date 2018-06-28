import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-advice_planned_maintainance',
    templateUrl: 'advice_planned_maintainance.html'
})
export class AdvicePlannedMaintainancePage {

    documentNumber: any;
    selectedResult: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.documentNumber = 1
    }

    dropdown() {
        console.log("dropdown");

        let alert = this.alertCtrl.create();
        alert.setTitle('Resterende levensduur');

        alert.addInput({
            type: 'radio',
            label: '0-2 jaar',
            value: '0-2 jaar',
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
        
    }

}
