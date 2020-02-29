import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Marker } from '../classes/marker';
import * as L from 'leaflet';



@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  private map;
  @Output() removeMarkEmit: EventEmitter<Marker> = new EventEmitter<Marker>();

  @Input()
  set marker(marker: Marker) {
    if (marker) {

      if (Array.isArray(marker)) {
        marker.forEach(m => {
          const mark = L.marker([m.latitude, m.longitude]).addTo(this.map);
          mark.on('mouseover', (markItem) => {
            this.removeMarker(markItem.latlng);
            this.map.removeLayer(mark);
          });
        });
      } else {
        const mark = L.marker([marker.latitude, marker.longitude]).addTo(this.map);
        mark.on('mouseover', (markItem) => {
          this.removeMarker(markItem.latlng);
          this.map.removeLayer(mark);
        });
      }
    }
  }

  constructor() {}

  ngOnInit() {}

  private initMap() {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  removeMarker(marker) {
    const {lat, lng} = marker;
    this.removeMarkEmit.emit({latitude: lat, longitude: lng});
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
