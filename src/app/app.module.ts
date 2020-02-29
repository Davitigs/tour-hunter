import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import {MarkerStateService} from './marker-state.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftBlockComponent,
    RightBlockComponent,
    LeafletMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MarkerStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
