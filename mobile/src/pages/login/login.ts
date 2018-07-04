import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';

import { SearchContractPage } from '../search-contract/search-contract';
import { MenuPage } from '../menu/menu';
import { Checklists } from '../../models/checklists';
import { VERSION } from '@angular/core';

import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from '../../models/products';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { Version } from '@angular/compiler';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  ary: any;
  stringAry: any;

  constructor(public navCtrl: NavController, private menu: MenuController, private alertCtrl: AlertController) {
    // debugger;

    console.log("angular version :::",VERSION.full)

    this.ary = []
    this.stringAry = []

    let a = new Checklists()
    a.Member = "abc"
    a.ItemCount = 10
    a.FunctionName = "addition"
    a.Caption = "ionic"
    this.ary.push(a)

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;

    let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
      "I'll be " + (age + 1) + " years old next month.";


    this.stringAry = ["1", "2", "3"];
    console.log("ary count ::::", this.stringAry.count)

    for (let e of this.stringAry) {
      console.log("element is :::::", e);
    }

    for (var i = 0; i < 10; i++) {
      console.log("i value is ::::", i);
      let a = new Checklists()
      a.Member = "abc" + i
      a.ItemCount = 10 + i
      a.FunctionName = "addition" + i
      a.Caption = "ionic" + i
      this.ary.push(a)
    }
  }

  login() {
    this.navCtrl.push(SearchContractPage);
  }

  forgotPass() {
    let prompt = this.alertCtrl.create({
      title: 'Wachtwoord vergeten',
      message: "",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mailadres',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Sluiten',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Wachtwoord reseten',
          handler: data => {
            console.log('reset password clicked ::;', data.email);
          }
        }
      ]
    });
    prompt.present();
  }

  forgotPass1() {
    debugger;
    // this.navCtrl.setRoot('MenuPage');
    let alert = this.alertCtrl.create();
    alert.setTitle('Confirm!');
    alert.setMessage('Message <strong>text</strong>!!!');
    alert.addButton({
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel');
      }
    });
    alert.addButton({
      text: 'Okay',
      handler: () => {
        console.log('Confirm Ok');

      }
    });
    alert.present(alert).then(() => {

    });
  }

  ionViewDidEnter() {
    console.log("called");
    this.menu.swipeEnable(false);
  }

/*
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
  };

  public gridData: GridDataResult = process(sampleProducts, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleProducts, this.state);
  }
*/

}
