import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StructuralPartPage } from '../structural_part/structural_part';
import { RoofConstructionPartPage } from '../roof_construction_part/roof_construction_part';

@Component({
    selector: 'page-inventory_roof_components',
    templateUrl: 'inventory_roof_components.html'
})
export class InventoryRoofComponentsPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    addRoofComponent() {
        this.navCtrl.push(RoofConstructionPartPage)
    }

    editRecord() {
        
    }

    deleteRecord() {
        
    }

}
