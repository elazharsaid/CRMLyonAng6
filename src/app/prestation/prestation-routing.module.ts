import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditComponent } from './components/edit/edit.component';
import { EditPresationComponent } from './edit-presation/edit-presation.component';
import { PresationResolverService } from './services/presation-resolver.service';


const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent},
  { path: 'add', component: AddPrestationComponent},
  { path: 'edit/:id', component: EditPresationComponent, resolve: { prestation: PresationResolverService }},

];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
    // other imports here
  ],
  exports: [RouterModule],
})
export class PrestationRoutingModule { }
