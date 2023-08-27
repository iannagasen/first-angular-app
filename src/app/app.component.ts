import { Component } from '@angular/core';

// By Convention this AppComponent is the main module
// Main Module -> starting point of an app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app-changed';
  description = 'Hello World';
}
