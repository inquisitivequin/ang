import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 allowServer = false;
 servStatus = "this is potatos"
 servName = "it's all fried"

  constructor() { 
  	setTimeout(() => {
  		this.allowServer = true
  	}, 2000)
  }

  onCreateServ() {
  	this.servStatus = 'this is not potatos ' + this.servName
  }

  onUpdateServName(event: Event) {
  	this.servName = (<HTMLInputElement>event.target).value
  }

  ngOnInit() {
  }

}
