import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IONE_COMPONENTS } from '.';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    ...IONE_COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
  ]
})
export class IoneComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IoneComponentsModule,
    };
  }
}
