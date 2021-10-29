import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctzmap',
  templateUrl: './ctzmap.component.html',
  styleUrls: ['./ctzmap.component.css']
})
export class CtzmapComponent implements OnInit {

  constructor(private router: Router) { }
  toCtz(){
    this.router.navigate(['send']);
  }
  ngOnInit(): void {
  }

}
