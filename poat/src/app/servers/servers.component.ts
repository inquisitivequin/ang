import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 allowServer = false;
 poat = "this is potatos"
 poatless = ""

  constructor() { 
  	setTimeout(() => {
  		this.allowServer = true
  	}, 2000)
  }

  onPoat() {
  	this.poat = 'this is not potatos'
  }

  onUpPoat(event: Event) {
  	this.poatless = (<HTMLInputElement>event.target).value
  }

  ngOnInit() {
  }

}
