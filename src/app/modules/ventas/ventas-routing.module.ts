import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { ShowVentaComponent } from './pages/show-venta/show-venta.component';
import { ListVentaComponent } from './pages/list-venta/list-venta.component';
import { NewVentaComponent } from './pages/new-venta/new-venta.component';
import { EditVentaComponent } from './pages/edit-venta/edit-venta.component';
import { NewDetalleServicioComponent } from './pages/new-detalle-servicio/new-detalle-servicio.component';
import { NewDetalleComponent } from './pages/new-detalle/new-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: VentasComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListVentaComponent },
      { path: 'new', component: NewVentaComponent },
      { path: 'edit', component: EditVentaComponent },
      { path: 'show/:id', component: ShowVentaComponent },
      { path: 'detalleServicio/new/:id', component: NewDetalleServicioComponent },
      { path: 'detalleProducto/new/:id', component: NewDetalleComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
