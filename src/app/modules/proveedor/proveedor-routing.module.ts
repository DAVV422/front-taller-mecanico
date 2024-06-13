import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorComponent } from './proveedor.component';
import { ListProveedorComponent } from './pages/list-proveedor/list-proveedor.component';
import { NewProveedorComponent } from './pages/new-proveedor/new-proveedor.component';
import { EditProveedorComponent } from './pages/edit-proveedor/edit-proveedor.component';
import { ShowProveedorComponent } from './pages/show-proveedor/show-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedorComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListProveedorComponent },
      { path: 'new', component: NewProveedorComponent },
      { path: 'edit', component: EditProveedorComponent },
      { path: 'show', component: ShowProveedorComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorsRoutingModule {}
