import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSalidaComponent } from './detalle-salida.component';
import { ListDetalleSalidaComponent } from './pages/list-detalle-salida/list-detalle-salida.component';
import { NewDetalleSalidaComponent } from './pages/new-detalle-salida/new-detalle-salida.component';
import { EditDetalleSalidaComponent } from './pages/edit-detalle-salida/edit-detalle-salida.component';
import { ShowDetalleSalidaComponent } from './pages/show-detalle-salida/show-detalle-salida.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleSalidaComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListDetalleSalidaComponent },
      { path: 'new', component: NewDetalleSalidaComponent },
      { path: 'edit', component: EditDetalleSalidaComponent },
      { path: 'show', component: ShowDetalleSalidaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSalidaRoutingModule {}
