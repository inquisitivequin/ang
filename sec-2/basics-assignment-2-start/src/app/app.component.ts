import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	notEmpty = 0
	username = ''

	constructor() {
		this.username.length > 0 ? this.notEmpty = 1: this.notEmpty = 0
	}

	submit(event: Event){
		this.username = ''
	}
}
