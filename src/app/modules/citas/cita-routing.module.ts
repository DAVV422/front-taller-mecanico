import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './cita.component';
import { ListCitaComponent } from './pages/list-cita/list-cita.component';
import { NewCitaComponent } from './pages/new-cita/new-cita.component';
import { EditCitaComponent } from './pages/edit-cita/edit-cita.component';
import { ShowCitaComponent } from './pages/show-cita/show-cita.component';


const routes: Routes = [
  {
    path: '',
    component: CitaComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListCitaComponent },
      { path: 'new', component: NewCitaComponent },
      { path: 'edit', component: EditCitaComponent },
      { path: 'show', component: ShowCitaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaRoutingModule {}
