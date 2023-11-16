import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  redirectToPostPage() {
    window.location.href = '/post'; // Directly change the location to the 'post' route
  }
}