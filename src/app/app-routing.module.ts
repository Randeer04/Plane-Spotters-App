import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './modules/Sighting/create/create.component' ;
import { ListComponent } from './modules/Sighting/list/list.component';
import {DetailComponent} from './modules/Sighting/detail/detail.component'

const routes: Routes = [
  { path: '', redirectTo: 'sightings', pathMatch: 'full' },
  { path: 'sightings', component: ListComponent },
  { path: 'Sightings/:id', component: DetailComponent },
  { path: 'add', component: CreateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
