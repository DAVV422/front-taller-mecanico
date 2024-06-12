import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios.component';
import { ListServicioComponent } from './pages/list-servicio/list-servicio.component';
import { NewServicioComponent } from './pages/new-servicio/new-servicio.component';
import { EditServicioComponent } from './pages/edit-servicio/edit-servicio.component';
import { ShowServicioComponent } from './pages/show-servicio/show-servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListServicioComponent },
      { path: 'new', component: NewServicioComponent },
      { path: 'edit', component: EditServicioComponent },
      { path: 'show', component: ShowServicioComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
