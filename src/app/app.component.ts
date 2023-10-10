import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template:`
    <app-navbar></app-navbar>
`
})
export class AppComponent {
  title = 'homes';
}
