import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    btnState = false
    clicks = []

	btn() {
		this.btnState === true ? this.btnState = false : 
		this.btnState = true
		this.clicks.push('It is now' + Date.now())
	}

}
