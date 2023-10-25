import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  constructor(private router: Router) {
    console.log("url", router.url);
    const url = window.location.href;
    // if (url.indexOf('login') > -1 || url.indexOf('/register') > -1) {
    // }
    const sessionToken = localStorage.getItem('isLoggedin') || false;
    if (sessionToken == 'true') {
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn, sessionToken);
  }

  ngOnInit() {
    // setInterval(function () {
    //   const sessionToken = localStorage.getItem('isLoggedin') || false;
    //   if (sessionToken == 'true') {
    //     this.isLoggedIn = true;
    //   }
    // },5000)
  }


  logout() {
    localStorage.removeItem('isLoggedin');
    this.isLoggedIn = false;
    this.router.navigate(['']);

  }

}
