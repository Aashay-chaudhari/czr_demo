import { Component, OnInit } from '@angular/core';
import {LocationService} from "../location.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(public location: LocationService){

    this.location.getPosition().then((pos: { lng: any; lat: any; })=>
    {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }

}
