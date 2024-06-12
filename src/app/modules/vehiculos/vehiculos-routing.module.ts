import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos.component';
import { ListVehiculoComponent } from './pages/list-vehiculo/list-vehiculo.component';
import { NewVehiculoComponent } from './pages/new-vehiculo/new-vehiculo.component';
import { EditVehiculoComponent } from './pages/edit-vehiculo/edit-vehiculo.component';
import { ShowUserComponent } from '../user/pages/show-user/show-user.component';


const routes: Routes = [
  {
    path: '',
    component: VehiculosComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListVehiculoComponent },
      { path: 'new', component: NewVehiculoComponent },
      { path: 'edit', component: EditVehiculoComponent },
      { path: 'show', component: ShowUserComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
