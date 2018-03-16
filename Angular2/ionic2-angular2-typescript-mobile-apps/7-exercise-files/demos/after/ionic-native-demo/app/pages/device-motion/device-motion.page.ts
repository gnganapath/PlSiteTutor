import { Component } from '@angular/core';
import { AccelerationData, AccelerometerOptions, DeviceMotion } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/device-motion/device-motion.page.html',
})
export class DeviceMotionPage {
  data: any;
  subscription: any;

  constructor() { }

  startWatching(){
    var options: AccelerometerOptions = {
      frequency: 500
    };

    this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: AccelerationData) => {
      this.data = acceleration;
    });
  }

  stopWatching(){
    this.subscription.unsubscribe();
  }

}
