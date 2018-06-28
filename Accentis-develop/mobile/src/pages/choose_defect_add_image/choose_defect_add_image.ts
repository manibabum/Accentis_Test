import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-choose_defect_add_image',
    templateUrl: 'choose_defect_add_image.html'
})
export class ChooseDefectAddImagePage {

    documentNumber: any;
    ary:any;

    constructor(public navCtrl: NavController) {
        this.documentNumber = 1

        this.ary = []
        for (let i=1; i<10; i++) {
            this.ary.push(i)
        }
    }

    addPhotos() {
        
    }

    clickCardNumber() {
        
    }
}
