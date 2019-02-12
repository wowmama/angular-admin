import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ToastPageComponent } from './toast-page/toast-page.component';
import { UiServicesRoutingModule } from './ui-services-routing.module';
import { UiServicesComponent } from './ui-services.component';


const UI_SERVICES_COMPONENTS = [
  LoadingPageComponent,
  ToastPageComponent,
  UiServicesComponent
];

@NgModule({
  imports: [
    UiServicesRoutingModule,
    FormsModule
  ],
  declarations: [
    UI_SERVICES_COMPONENTS,
    AlertPageComponent,
  ],
})
export class UiServicesModule {
}
