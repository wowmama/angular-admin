import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-main>
    <router-outlet></router-outlet>
  </app-main>
  `,
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
