import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-imageZoom',
  templateUrl: 'imageZoom.html'
})
export class ImageZoomPage {

  base64Image: string;

  constructor(public navCtrl: NavController) {

  }

}
