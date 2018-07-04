import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { InspectionEditPhotoPage } from '../inspection_edit_photo/inspection_edit_photo';
import { RoofAddEditPage } from '../roof_add_edit/roof_add_edit';
import { RoofDetailPage } from '../roof_detail/roof_detail';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-inspection_detail',
  templateUrl: 'inspection_detail.html',
  providers: [Camera]
})
export class InspectionDetailPage {

    photos: any;
    base64Image: string;
    ary:any;

    
    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private camera: Camera) {
    
        this.ary = []
        for (let i=1; i<10; i++) {
            this.ary.push(i)
        }
    }

    clickCardNumber(i) {
        console.log("calling change data ::::",i);
        this.navCtrl.push(InspectionEditPhotoPage);
    }

    addPhoto() {
        console.log("calling add photo ::::");

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Kies foto',
            buttons: [
              {
                text: 'Maak foto',
                role: 'destructive',
                handler: () => {
                  console.log('take photo clicked');
                  const options: CameraOptions = {
                    quality: 100,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    saveToPhotoAlbum: true,
                    correctOrientation: true,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    mediaType: this.camera.MediaType.VIDEO
                  }
                  this.camera.getPicture(options)
                    .then((imageData)=>{
                        console.log("camera imagedata ::::");
                    }).then((path) => {
                        console.log("camera imagedata path ::::");
                    })
                }
              },
              {
                text: 'Fotobibliotheek',
                role: 'destructive',
                handler: () => {
                    console.log('photo library clicked');
                    
                    const options: CameraOptions = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
                     }
                     
                     this.camera.getPicture(options)
                        .then((imageData)=> {
                            this.base64Image  = 'data:image/jpeg;base64,' + imageData;
                            console.log("1234560 :::::",this.base64Image);
                        }).then((path) => {
                            console.log("path is :::::",path);
                        })

                        /*
                        this.camera.getPicture(options).then((imageData) => {
                            console.log(123);
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64:
                        this.base64Image  = 'data:image/jpeg;base64,' + imageData;
                        // this.photos.push(this.base64Image);
                        // this.photos.reverse();
                       }, (err) => {
                         // Handle error
                       })*/
                }
              },
              {
                text: 'Sluiten',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
       
          actionSheet.present();
    }

    addRoof() {
        console.log("calling add roof ::::");
        this.navCtrl.push(RoofAddEditPage);
    }

    roofDetail() {
        console.log("calling roof detail ::::");
        this.navCtrl.push(RoofDetailPage);
    }

}
