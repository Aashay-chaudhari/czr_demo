import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ctzlogin',
  templateUrl: './ctzlogin.component.html',
  styleUrls: ['./ctzlogin.component.css']
})
export class CtzloginComponent implements OnInit {

  username: any;
  error: any;
  errshow = false;
  constructor(private router: Router) { }

  login(){
    if(this.username==undefined|| this.username == ''){
      console.log("Empty username")
      this.error = "Username can not be empty"
      this.errshow = true;
    }
    else if(this.username!="Admin"){
      console.log("Wrong username")
      this.error = "Username does not exist. Try Admin."
      this.errshow = true;
    }
    else if(this.username == "Admin"){
      console.log("Name is : ", this.username)
      console.log("Username saved in local storage is : ", this.username)
      localStorage.setItem('czr_username', this.username);
      this.router.navigate(['send']);
    }


  }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['']);

  }

}
