import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenTrabajoComponent } from './orden-trabajo.component';
import { ListOrdenTrabajoComponent } from './pages/list-orden-trabajo/list-orden-trabajo.component';
import { NewOrdenTrabajoComponent } from './pages/new-orden-trabajo/new-orden-trabajo.component';
import { EditOrdenTrabajoComponent } from './pages/edit-orden-trabajo/edit-orden-trabajo.component';
import { ShowOrdenTrabajoComponent } from './pages/show-orden-trabajo/show-orden-trabajo.component';

const routes: Routes = [
  {
    path: '',
    component: OrdenTrabajoComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListOrdenTrabajoComponent },
      { path: 'new', component: NewOrdenTrabajoComponent },
      { path: 'edit/:id', component: EditOrdenTrabajoComponent },
      { path: 'show', component: ShowOrdenTrabajoComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenTrabajoRoutingModule {}
