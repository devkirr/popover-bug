import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height = '500px';
  visible: boolean = false;

  onClick = () => {
    this.height = '100px';
  }
}
