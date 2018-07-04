import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoofDrawingPage } from '../roof_drawing/roof_drawing';
import { InventoryTimbersPage } from '../inventroy_timbers/inventroy_timbers';
import { InventoryRoofComponentsPage } from '../inventory_roof_components/inventory_roof_components';
import { InspectionRoofComponentsPage } from '../inspection_roof_components/inspection_roof_components';

@Component({
    selector: 'page-fileRecording',
    templateUrl: 'fileRecording.html'
})
export class FileRecordingPage {

    documentNumber: any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1
    }

    roofDrawing() {
        this.navCtrl.push(RoofDrawingPage)
    }

    inventoryTimbers() {
        this.navCtrl.push(InventoryTimbersPage)
    }

    inventoryRoofComponents() {
        this.navCtrl.push(InventoryRoofComponentsPage)
    }

    inspectionRoofComponents() {
        this.navCtrl.push(InspectionRoofComponentsPage)
    }

}
