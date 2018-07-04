import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StructuralPartPage } from '../structural_part/structural_part';

@Component({
    selector: 'page-inventroy_timbers',
    templateUrl: 'inventroy_timbers.html'
})
export class InventoryTimbersPage {

    documentNumber: any;
    ary: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1

        this.ary = []
        for (let i = 1; i < 10; i++) {
            this.ary.push(i)
        }
    }

    addStructuralPart() {
        this.navCtrl.push(StructuralPartPage)
    }

    addImage() {
        
    }

    deleteRecord() {
        
    }

    clickCardNumber(i) {
        console.log("calling change data ::::", i);
    }
}
