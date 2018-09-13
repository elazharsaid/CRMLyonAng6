import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
/*import { ListPrestationComponent } from './prestation/containers/list-prestation/list-prestation.component';
import { LoginComponent } from './login/containers/login/login.component';
import { PageNotFoundComponent } from './page-notfound/containers/page-not-found/page-not-found.component';*/

const appRoutes: Routes = [
  /*{ path: 'login', component: LoginComponent }, delated cause was double*/
  /*{ path: 'prestations', component: ListPrestationComponent},*/
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: './prestation/prestation.module#PrestationModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: PreloadAllModules } // <-- debugging purposes only

    )
    // other imports here
  ]
  /*declarations: []*/
})
export class AppRoutingModule { }
