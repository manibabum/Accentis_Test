import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    debugger;
    this.pages = [
      { title: 'HomePage', component: HomePage }
    ];
  }

  ionViewDidLoad() {
    debugger;
    console.log('Hello MenuPage Page');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
