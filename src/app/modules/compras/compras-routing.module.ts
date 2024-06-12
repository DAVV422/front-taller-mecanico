import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras.component';
import { ListCompraComponent } from '../compras/pages/list-compra/list-compra.component';
import { NewCompraComponent } from '../compras/pages/new-compra/new-compra.component';
import { EditCompraComponent } from '../compras/pages/edit-compra/edit-compra.component';
import { ShowCompraComponent } from './pages/show-compra/show-compra.component';

const routes: Routes = [
  {
    path: '',
    component: ComprasComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListCompraComponent },
      { path: 'new', component: NewCompraComponent },      
      { path: 'edit', component: EditCompraComponent },
      { path: 'show', component: ShowCompraComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasRoutingModule {}
