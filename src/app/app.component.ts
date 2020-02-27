import { Component } from '@angular/core';
import { Marker } from './classes/marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  marker: Marker;
  constructor() {
  }

  getMarker(marker: Marker) {
    this.marker = marker;
  }
}
