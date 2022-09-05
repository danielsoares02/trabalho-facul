import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
    providers: [
        importProvidersFrom(AppRoutes),
    ]
})
    .catch(err => console.error(err));