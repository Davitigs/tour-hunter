import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marker } from '../classes/marker';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightBlockComponent implements OnInit {

  @Input() removedMarkers: Marker[];
  @Output() restoredMarker: EventEmitter<Marker> = new EventEmitter<Marker>();

  constructor() { }

  ngOnInit(): void {
  }

  restoreMarker(marker: Marker) {
    this.restoredMarker.emit(marker);
  }

}
