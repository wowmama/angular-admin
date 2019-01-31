import { NgModule } from '@angular/core';
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
    UiServicesRoutingModule
  ],
  declarations: [
    UI_SERVICES_COMPONENTS,
  ],
})
export class UiServicesModule {
}
