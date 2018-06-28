import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageZoomPage } from '../imageZoom/imageZoom';

@Component({
  selector: 'page-inspection_edit_photo',
  templateUrl: 'inspection_edit_photo.html',
  providers: [Camera]
})
export class InspectionEditPhotoPage {

  images: any;
  base64Image: string;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private camera: Camera) {
    this.images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
  }

  changePhoto() {
    console.log("change photo called");

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
                        // console.log("1234560 :::::",this.base64Image);
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

  removePhoto() {
    console.log("remove photo called");
  }

  save() {
    console.log("save called");
  }

  imageZoominNextView() {
    console.log("imageZoominNextView called");
    this.navCtrl.push(ImageZoomPage);
  }

}
