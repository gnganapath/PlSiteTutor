import { Component } from '@angular/core';
import { Vibration } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/vibration/vibration.page.html',
})
export class VibrationPage {

  constructor() { }

  vibrate(){
    Vibration.vibrate(2000);
  }

  vibratePattern(){
    Vibration.vibrate([2000, 1000, 500]);
  }
}
