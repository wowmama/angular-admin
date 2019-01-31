import { NgModule } from '@angular/core';
import { IoneModule } from '../ione/ione.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    IoneModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
