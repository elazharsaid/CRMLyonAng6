import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PageNotfoundModule } from './page-notfound/page-notfound.module';
/*import { PrestationModule } from './prestation/prestation.module';*/

import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { environment } from '../environments/environement.firebase';


// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    LoginModule,
    /*PrestationModule,*/
    PageNotfoundModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' }, CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule {

    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
