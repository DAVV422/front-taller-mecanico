import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ListProductoComponent } from './pages/list-producto/list-producto.component';
import { NewProductoComponent } from './pages/new-producto/new-producto.component';
import { EditProductoComponent } from './pages/edit-producto/edit-producto.component';
import { ShowProductoComponent } from './pages/show-producto/show-producto.component';
import { ProductoSalidaComponent } from './pages/productosalida/productosalida.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListProductoComponent },
      { path: 'new', component: NewProductoComponent },
      { path: 'edit', component: EditProductoComponent },
      { path: 'show', component: ShowProductoComponent },
      { path: 'productosalida', component: ProductoSalidaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
