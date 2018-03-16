import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { BarcodeScannerPage, CameraPage, DeviceMotionPage, GeolocationPage, HomePage, LocalNotificationsPage, VibrationPage } from './pages/pages';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon?: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Vibration', component: VibrationPage, icon: 'pulse' },
      { title: 'Geolocation', component: GeolocationPage, icon: 'locate' },
      { title: 'Camera', component: CameraPage, icon: 'camera' },
      { title: 'Barcode Scanner', component: BarcodeScannerPage, icon: 'barcode' },
      { title: 'Device Motion', component: DeviceMotionPage, icon: 'move' },
      { title: 'Local Notifications', component: LocalNotificationsPage, icon: 'notifications' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
