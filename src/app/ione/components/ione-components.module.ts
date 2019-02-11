import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IONE_COMPONENTS } from '.';

@NgModule({
  declarations: [
    ...IONE_COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...IONE_COMPONENTS,
  ]
})
export class IoneComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IoneComponentsModule,
    };
  }
}
