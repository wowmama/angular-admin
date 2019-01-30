import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IONE_COMPONENTS } from './components';
import { IONE_EFFECTS } from './effects';
import { IONE_SERVICES } from './services';
import { reducers } from './stores';

@NgModule({
  declarations: [
    ...IONE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('ione', reducers),
    EffectsModule.forFeature(IONE_EFFECTS)
  ],
  exports: [
    ...IONE_COMPONENTS,
  ]
})
export class IoneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IoneModule,
      providers: IONE_SERVICES
    };
  }
}
