import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { UtilsService } from './services/utils.service';

@NgModule()
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
  //   if (parentModule) {
  //     throw new Error('CoreModule should only be imported in AppModule.');
  //   }
  // }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UtilsService
      ]
    };
  }
}
