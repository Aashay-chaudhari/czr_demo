import { Component, OnInit } from '@angular/core';
import { sendDataService } from 'src/services/sendData.service';
import {LocationService} from "../location.service";
import { Router } from '@angular/router';
import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-ctz',
  templateUrl: './ctz.component.html',
  styleUrls: ['./ctz.component.css']
})
export class CtzComponent implements OnInit {

  constructor(public location: LocationService,
              private sendData : sendDataService,
              private router: Router){

    this.location.getPosition().then((pos: { lng: any; lat: any; })=>
    {
      let long1 = pos.lng
      let lat1 = pos.lat
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      console.log("Logitude is  ", long1)
      console.log("Latitude is  ", lat1)
      localStorage.setItem('c_lat', long1);
      localStorage.setItem('c_lon', lat1);

    });

  }
  loading = false;
  username = localStorage.getItem('czr_username');
  c_lat = localStorage.getItem('c_lat');
  c_lon = localStorage.getItem('c_lon');

  ngOnInit(): void {
    console.log("Username is: ", this.username)
  }
  logout(){
    this.router.navigate(['']);
    localStorage.removeItem('czr_username');

  }
  send(){
    let num = Math.random()*100000

      let params = {
        "conn_id" : String(num),
        "name" : this.username,
        "lon" : this.c_lon,
        "lat" : this.c_lat
      }
      this.sendData.sendInfo(params).subscribe((response: any)=>{
        console.log("Successful. Response below.")
        console.log(response)
      }), (err: any)=>{
        console.log(err)
      }
      console.log("Connecting to websocket now")
      const subject = webSocket('wss://0a7q2a45h2.execute-api.us-east-1.amazonaws.com/dev');
  
      subject.subscribe(
      msg => {
        console.log('message received: ' + msg)
        localStorage.setItem("type","ctz")
        this.router.navigate(['booked']);
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    )
    this.loading = true;
  }
  toMaps(){
    this.router.navigate(['ctzmaps']);
  }
}
