import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
declare var window: any;

@Component({
  templateUrl: 'build/pages/barcode-scanner/barcode-scanner.page.html',
})
export class BarcodeScannerPage {
  results: any;

  constructor() { }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.results = barcodeData;
    }, (err) => {
        // An error occurred
        alert(`Error scanning: ${err}`);
    });
  }

  reset() {
    this.results = null;
  }

  lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }

}
