import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resplogin',
  templateUrl: './resplogin.component.html',
  styleUrls: ['./resplogin.component.css']
})
export class ResploginComponent implements OnInit {
  name : any;
  error: any;
  errshow = false;
  constructor(private router: Router) { }
  login(){
    if(this.name==undefined|| this.name == ''){
      console.log("Empty username")
      this.error = "Username can not be empty"
      this.errshow = true;
    }else{
      console.log("Name is : ", this.name)
      console.log("Username saved in local storage is : ", this.name)
      localStorage.setItem('resp_username', this.name);
      this.router.navigate(['receive']);
    }

  }
  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['']);

  }
}
