import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Marker} from '../classes/marker';
import * as L from 'leaflet';



@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  private map;

  @Input()
  set marker(marker: Marker[]) {
    if (marker) {
        marker.forEach(m => L.marker([m.latitude, m.longitude]).addTo(this.map));
      }
    }

  constructor() {

  }

  ngOnInit() {
  }

  private initMap() {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
