import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms-operations';

  isLoggedIn: boolean = false;
  chechLoggedIn() {
    const sessionToken = localStorage.getItem('isLoggedin') || false;
    if (sessionToken == 'true') {
      this.isLoggedIn = true;
      return true;
    }
    console.log(this.isLoggedIn, sessionToken);
    return false;
  }
}
