import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { ListCompraComponent } from '../compras/pages/list-compra/list-compra.component';
import { NewCompraComponent } from '../compras/pages/new-compra/new-compra.component';
import { EditCompraComponent } from '../compras/pages/edit-compra/edit-compra.component';
import { ShowVentaComponent } from './pages/show-venta/show-venta.component';

const routes: Routes = [
  {
    path: '',
    component: VentasComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListCompraComponent },
      { path: 'new', component: NewCompraComponent },
      { path: 'edit', component: EditCompraComponent },
      { path: 'show', component: ShowVentaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
