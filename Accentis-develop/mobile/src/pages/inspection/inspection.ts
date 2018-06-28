import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { InspectionDetailPage } from '../inspection_detail/inspection_detail';
import { InspectionAddPage } from '../inspection_add/inspection_add';

@Component({
  selector: 'page-inspection',
  templateUrl: 'inspection.html'
})
export class InspectionPage {

  msg : any
  inspectorName : any
  year: any
  finalInspector: any
  finalYear: any

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    // debugger;
    this.inspectorName = 'kalupru';
    this.year = '01-0214';
    this.msg = 'Inspecteur : '+ this.inspectorName +'Volgnummer : '+ this.year
    this.finalInspector = 'Inspecteur : '+ this.inspectorName +'\n'
    this.finalYear = 'Volgnummer : '+ this.year
    
    console.log(this.finalInspector,this.finalYear);
    
  }

  addInspection() {
    console.log("inspection add");
    this.navCtrl.push(InspectionAddPage);
  }

  addInspection1() {
    let prompt = this.alertCtrl.create({
      title: 'Inspectie toevoeggen',
      message: "Inspecteur - Piet van Puffelen",
      
      inputs: [
        {
          name: 'Volgnummer',
          placeholder: 'Volgnummer'
        },
        {
          name: 'Datum',
          placeholder: 'Datum',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Sluiten',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Opslaan',
          handler: data => {
            console.log('Saved clicked',data.Volgnummer,data.Datum);
            if (data.Volgnummer == "") {
              console.log("first field empty");
            }
            if (data.Datum == "") {
              console.log("second field empty");
            }
          }
        }
      ]
    });
    prompt.present();
  }

  carryoutInspection() {
    let alert = this.alertCtrl.create({
      title: 'Inspectie uitvoeren',
      subTitle: 'Inspecteur : Piet van Puffelen <br/> Volgnummer : 01 - 2015',
      // login inspector name
      message:'How wordt de inspectie uitgevoerd?',
      buttons: [
        {
          text: 'NEN2767',
          handler: data => {
            console.log('nen2767 clicked');
          }
        },
        {
          text: 'Basis inspectiemethodiek',
          handler: data => {
            console.log('basis clicked');
          }
        }
        ,{
          text: 'Sluiten',
          handler: data => {
            console.log('close clicked');
          }
        }
      ]
    });
    alert.present();
  }

  inspectionDetail() {
    console.log("inspection detail");
    this.navCtrl.push(InspectionDetailPage);
  }

}