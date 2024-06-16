import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos.component';
import { ListVehiculoComponent } from './pages/list-vehiculo/list-vehiculo.component';
import { NewVehiculoComponent } from './pages/new-vehiculo/new-vehiculo.component';
import { EditVehiculoComponent } from './pages/edit-vehiculo/edit-vehiculo.component';
import { ShowUserComponent } from '../user/pages/show-user/show-user.component';
import { ListMarcaComponent } from './pages/list-marca/list-marca.component';
import { NewMarcaComponent } from './pages/new-marca/new-marca.component';
import { EditMarcaComponent } from './pages/edit-marca/edit-marca.component';
import { ShowMarcaComponent } from './pages/show-marca/show-marca.component';


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
  {
    path: 'marcas',
    component: VehiculosComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListMarcaComponent },
      { path: 'new', component: NewMarcaComponent },
      { path: 'edit', component: EditMarcaComponent },
      { path: 'show', component: ShowMarcaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
