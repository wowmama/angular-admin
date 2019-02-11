import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-ui-services',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UiServicesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log('event');
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

      }
    });
  }

}
