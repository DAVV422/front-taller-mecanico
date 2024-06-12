import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './pagos.component';
import { ListPagoComponent } from './pages/list-pago/list-pago.component';
import { NewPagoComponent } from './pages/new-pago/new-pago.component';
import { EditPagoComponent } from './pages/edit-pago/edit-pago.component';
import { ShowPagoComponent } from './pages/show-pago/show-pago.component';

const routes: Routes = [
  {
    path: '',
    component: PagosComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListPagoComponent },
      { path: 'new', component: NewPagoComponent },
      { path: 'edit', component: EditPagoComponent },
      { path: 'show', component: ShowPagoComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosRoutingModule {}
