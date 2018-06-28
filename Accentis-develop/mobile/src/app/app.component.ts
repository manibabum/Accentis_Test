import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SearchContractPage } from '../pages/search-contract/search-contract';
import { EditProfilePage } from '../pages/edit_profile/edit_profile';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="false">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

export class MyApp {

  // platform: any;
  // private resetBackButton: any;
  rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Contracten' , component:SearchContractPage },
    { title: 'Edit Profile' , component: EditProfilePage},
    { title: 'Logout' , component:LogoutPage },
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // ionViewDidEnter() {
  //   if (this.resetBackButton) {
  //     this.resetBackButton();
  //   }
  //   this.resetBackButton = this.platform.registerBackButtonAction(() => {
  //     (navigator as any).Backbutton.canGoBack();
  //   });
  // }
  
  // ionViewWillLeave() {
  //   if (this.resetBackButton) {
  //     this.resetBackButton();
  //     this.resetBackButton = null;
  //   }
  // }
  
  openPage(page) {
    // this.nav.setRoot(page.component);
    console.log(page.component)
    if (page.component == LogoutPage) {
      this.nav.pop(page.component)
    } else if (page.component == SearchContractPage) {
      
    } else {
      this.nav.push(page.component);
    }
  }
}
