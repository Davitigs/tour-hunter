import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Marker} from '../classes/marker';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftBlockComponent implements OnInit {

  showTree = false;

  @Output() marker: EventEmitter<Marker | Marker[]> = new EventEmitter<Marker | Marker[]>();
  @Input() disabledMarkers: Marker[];

  firstLevelList = [
    'First', 'Second', 'Third'
  ];

  secondLevelList = [
    'First', 'Second', 'Third'
  ];


  thirdLevelList = [

    {
      name: 'First',
      latitude: 42.023949,
      longitude: -93.647595,
    },
    {
      name: 'Second',
      latitude: 28.0527364557,
      longitude: -82.4078333687,
    },
    {
      name: 'Third',
      latitude: 38.89767,
      longitude: -77.03655,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleTree() {
    this.showTree = !this.showTree;
  }

  markPoint(marker: Marker | Marker[]) {
    if (Array.isArray(marker)) {
      const filteredMarkers = marker.filter(mark => {
        return !this.disabledMarkers.includes(mark);
      });
      this.marker.emit(filteredMarkers);
    } else {
      if ( !this.disabledMarkers.includes(marker) ) {
        this.marker.emit(marker);
      }
    }
  }
}
