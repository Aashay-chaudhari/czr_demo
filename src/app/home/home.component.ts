import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }


  loginCTZ(){
    this.router.navigate(['ctzlogin']);
    console.log("In method")
  }
  loginResp(){
    this.router.navigate(['resplogin']);

  }
  ngOnInit(): void {
  }

}
