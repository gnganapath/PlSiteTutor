import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/camera/camera.page.html',
})
export class CameraPage {
  imgSrc: any;

  constructor() { }

  takePicture(){
    let options : CameraOptions = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false
    };

    Camera.getPicture(options).then((imageUri) => {
      this.imgSrc = imageUri;
    });
  }

}
