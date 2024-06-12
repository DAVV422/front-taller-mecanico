import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ListEntradaProductoComponent } from './pages/list-entrada-producto/list-entrada-producto.component';
import { NewEntradaProductoComponent } from './pages/new-entrada-producto/new-entrada-producto.component';
import { EditEntradaProductoComponent } from './pages/edit-entrada-producto/edit-entrada-producto.component';
import { ShowEntradaProductoComponent } from './pages/show-entrada-producto/show-entrada-producto.component';
import { ListSalidaProductoComponent } from './pages/list-salida-producto/list-salida-producto.component';
import { NewSalidaProductoComponent } from './pages/new-salida-producto/new-salida-producto.component';
import { EditSalidaProductoComponent } from './pages/edit-salida-producto/edit-salida-producto.component';
import { ShowSalidaProductoComponent } from './pages/show-salida-producto/show-salida-producto.component';

const routes: Routes = [
  {
    path: 'entradas',
    component: InventarioComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListEntradaProductoComponent },
      { path: 'new', component: NewEntradaProductoComponent },      
      { path: 'edit', component: EditEntradaProductoComponent },
      { path: 'show', component: ShowEntradaProductoComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
  {
    path: 'salidas',
    component: InventarioComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListSalidaProductoComponent },
      { path: 'new', component: NewSalidaProductoComponent },      
      { path: 'edit', component: EditSalidaProductoComponent },
      { path: 'show', component: ShowSalidaProductoComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasRoutingModule {}
