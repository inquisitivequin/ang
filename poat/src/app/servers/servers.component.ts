import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 newServ = ''
 servName = "it's all fried"
 updateStat = false;

  onCreateServ() {
  	this.updateStat = true;
  	this.newServ = 'this is not potatos ' + this.servName
  }

  onUpdateServName(event: Event) {
  	this.servName = (<HTMLInputElement>event.target).value
  }

  ngOnInit() {
  }

}
