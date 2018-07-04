import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { InspectionPage } from '../inspection/inspection';

// import { process, State } from '@progress/kendo-data-query';
// import { sampleProducts } from '../../models/products';
// import {
//   GridComponent,
//   GridDataResult,
//   DataStateChangeEvent
// } from '@progress/kendo-angular-grid';

@Component({
  selector: 'page-search-contract',
  templateUrl: 'search-contract.html'
})
export class SearchContractPage {

  constructor(public navCtrl: NavController, private menu: MenuController) {

  }

  // ionViewDidEnter() {
  //   console.log("called");
  //   this.menu.swipeEnable(false);
  // }

  inspectionDetail() {
    this.navCtrl.push(InspectionPage);
  }

}
