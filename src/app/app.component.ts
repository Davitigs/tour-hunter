import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Marker } from './classes/marker';
import { MarkerStateService } from './marker-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markers$: Observable<Marker[]>;
  removedMarkers$: Observable<Marker[]>;
  marker: Marker | Marker[];

  constructor(
    private markerState: MarkerStateService
  ) {}


  ngOnInit() {
    this.markers$ = this.markerState.markerState$;
    this.removedMarkers$ = this.markerState.removedMarkers$;
  }

  setMarker(marker: Marker) {
    this.markerState.setMarker(marker);
    this.marker = marker;
  }

  removedMarkers(marker: Marker) {
    this.markerState.removeMarker(marker);
  }

  restoreMarker(marker: Marker) {
    this.markerState.restoreMarker(marker);
  }
}
