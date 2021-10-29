import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookedmap',
  templateUrl: './bookedmap.component.html',
  styleUrls: ['./bookedmap.component.css']
})
export class BookedmapComponent implements OnInit {
  src:any;
  respbool : any;
  constructor() {
  this.src = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyBV529FSe4xKLycn2nglxF6msCC73Oiitg&origin=aundh+pizza+hut&destination=Mango+sweets+baner&avoid=tolls|highways'

   }

  ngOnInit(): void {
    let type = localStorage.getItem("type")
    console.log("type", type)
    if(type=="resp"){
      console.log("respbool is true")
      this.respbool = true;
    }else{
      this.respbool = false;
    }

  }

}
