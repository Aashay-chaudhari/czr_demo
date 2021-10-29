import { Component, OnInit } from '@angular/core';
import { receiveDataService } from 'src/services/receiveData.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {LocationService} from "../location.service";
import { UpdateDataService } from '../update-data.service';
import { WsMsgService } from '../ws-msg.service';
import { timer } from 'rxjs';
import { ResetService } from '../reset.service';



@Component({
  selector: 'app-resp',
  templateUrl: './resp.component.html',
  styleUrls: ['./resp.component.css']
})
export class RespComponent implements OnInit {
  displayedColumns: string[] = [
    'Name',
    'distance',
    "actions",
    'accept'
  ];
  conn_id : any;
  long1:any;
  lat1:any;
  dataSource : any;
  result: any;
  resetBtn = false;
  constructor(private receive : receiveDataService,
    private resetIt : ResetService,
    private wsMsg : WsMsgService,
    private updatedata : UpdateDataService,
    private router: Router,
    public location: LocationService) {
      this.location.getPosition().then((pos: { lng: any; lat: any; })=>
      {
        this.long1 = pos.lng
        this.lat1 = pos.lat
        console.log(`Positon: ${pos.lng} ${pos.lat}`);
        console.log("Logitude is  ", this.long1)
        console.log("Latitude is  ", this.lat1)
        localStorage.setItem('r_lat', this.long1);
        localStorage.setItem('r_lon', this.lat1);

      });

     }
     home(){
    this.router.navigate(['']);

     }
  ngOnInit(): void { 
    console.log("In ngoninit")
    let rstbtn = localStorage.getItem("resp_username")
    console.log("rstbtn is: ", rstbtn)
    if(rstbtn=="Admin"){
      this.resetBtn = true;
    }else{
      this.resetBtn = false;
    }
    let params = {}
    this.receive.receiveInfo(params).subscribe((response: any)=>{
      console.log(response)
      this.result = response;
      console.log("this.result is : ",this.result)
      let mapvar = this.result
      console.log("this is mapvar ", mapvar)
      mapvar = mapvar.map((val: any) => {
        let el2 = val.lat;
        let elo2 = val.lon;
        var l2: number = +el2;
        var lo2: number = +elo2;
        let dist = this.finddist(this.lat1,this.long1,l2,lo2)
        val.conn_id = dist
        return val
      });
      console.log("Mapvar updated value is: ", mapvar)
      let str1 = "74.8990"
      var y: number = +str1;
      this.dataSource = new MatTableDataSource(
        this.result
      );

    }), (err: any)=>{
      console.log(err.message)
    }
  }
  gotoMap(){
    this.router.navigate(['map']);

  }
  finddist(l1:any,lo1:any, l2:any, lo2:any){
    console.log("finddist")
    console.log(l1,l2,lo1,lo2)
    return Math.sqrt((l2-l1)*(l2-l1) - (lo2-lo1)*(lo2-lo1))
  }

  accept(name:string){
    
  }

  accepted(name: string){
    let data = {
      'name' : name
    }
    console.log("name is :", name)
    this.updatedata.updateData(data).subscribe((response: any)=>{
      console.log("response is: ", response)
      console.log("Successful. Response below.")
      this.conn_id = response.id
      console.log(this.conn_id)
    }), (err: any)=>{
      console.log(err)
    }
    const on$ = timer(5000)
    on$.subscribe((d)=>{
      this.updateData()

    })
    

  }

  updateData(){

    let data1 = {
      'id' : this.conn_id
    } 
    console.log("conn_id is : ",this.conn_id)
    this.wsMsg.sendMsg(data1).subscribe((response: any)=>{
      console.log("Successful.")
      console.log(this.conn_id)
    }), (err: any)=>{
      console.log(err)
    }
    localStorage.setItem("type","resp")
    this.router.navigate(['booked']);
  }
  reset(){
    let data2 = {

    }
    this.resetIt.resetData(data2).subscribe((response: any)=>{
        console.log("Reset")
    })
    this.ngOnInit()
  }

}
