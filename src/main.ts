import { enableProdMode, isDevMode } from '@angular/core';

//JIT compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//AOT compiler
// import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

if (!isDevMode()) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
