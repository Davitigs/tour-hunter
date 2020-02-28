import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Marker} from './classes/marker';

@Injectable({
  providedIn: 'root'
})
export class MarkerStateService {

  markerState: BehaviorSubject<Marker[] | null> =  new BehaviorSubject<Marker[] | null>([]);
  markerState$: Observable<Marker[]> = this.markerState.asObservable();
  disabledMarkers$: Observable<Marker[]> = this.markerState.asObservable();
  removedMarkers: BehaviorSubject<Marker[] | null> = new BehaviorSubject<Marker[] | null>([]);
  removedMarkers$: Observable<Marker[]> = this.removedMarkers.asObservable();

  constructor() { }

  get MarkerState() {
    return this.markerState.value;
  }

  get RemovedMarkers() {
    return this.removedMarkers.value;
  }

  setMarker(marker: Marker[] | Marker) {
    if ( Array.isArray(marker)) {
      const filteredMarkers = marker.filter(item => {
        return !this.MarkerState.includes(item);
      })
      this.markerState.next([...this.MarkerState, ...filteredMarkers]);
    } else {
      if (!this.MarkerState.includes(marker)) {
        this.markerState.next([...this.MarkerState, marker]);
      }
    }
  }

  removeMarker(marker: Marker) {
    const remainedMarkers = this.MarkerState.filter((mark) => {
      return mark.latitude !== marker.latitude && mark.longitude !== marker.longitude;
    });
    this.markerState.next([...remainedMarkers]);

    if ( !this.RemovedMarkers.includes(marker) ) {
      this.removedMarkers.next([...this.RemovedMarkers, marker]);
    }
  }

}
