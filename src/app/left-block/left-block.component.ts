import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Marker } from '../classes/marker';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.scss']
})
export class LeftBlockComponent implements OnInit {

  showTree = false;
  @Output() marker: EventEmitter<Marker> = new EventEmitter<Marker>();

  firstLevelList = [
    'First', 'Second', 'Third'
  ];

  secondLevelList = [
    'First', 'Second', 'Third'
  ];


  thirdLevelList = [
    'First', 'Second', 'Third',
    {
      latitude: 51.5,
      longitude: 0.09,
    },
    {
      latitude: 41.5,
      longitude: 0.09,
    },
    {
      latitude: 31.5,
      longitude: 0.09,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleTree() {
    this.showTree = !this.showTree;
  }

  markPoint(marker: Marker) {
    this.marker.emit(marker);
  }
}
