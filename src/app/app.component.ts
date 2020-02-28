import {Component, OnInit} from '@angular/core';
import { Marker } from './classes/marker';
import {MarkerStateService} from './marker-state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  markers$: Observable<Marker[]>;
  disabledMarkers$: Observable<Marker[]>;

  constructor(
    private markerState: MarkerStateService
  ) {}

  ngOnInit() {
    this.markers$ = this.markerState.markerState$;
    this.disabledMarkers$ = this.markerState.disabledMarkers$;
  }

  getMarker(marker: Marker | Marker[]) {
    this.markerState.setMarker(marker);
  }

  removedMarkers(marker: Marker) {
    this.markerState.removeMarker(marker);
  }
}
