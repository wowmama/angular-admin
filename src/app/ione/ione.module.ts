import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { IoneComponentsModule } from './components/ione-components.module';
import { IONE_EFFECTS } from './effects';
import { CustomSerializer } from './router/custom-route-serializer';
import { IONE_SERVICES } from './services';
import { IoneState, reducers } from './stores';

@NgModule({
  imports: [
    IoneComponentsModule,
    StoreModule.forFeature('ione', reducers),
    EffectsModule.forFeature(IONE_EFFECTS),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
})
export class IoneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IoneModule,
      providers: IONE_SERVICES
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: IoneComponentsModule,
    };
  }

  constructor(
    private store: Store<IoneState>,
    private actions$: Actions,
    private router: Router
  ) {
  }
}
