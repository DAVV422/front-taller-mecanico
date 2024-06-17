import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './entrada.component';
import { ListEntradaComponent } from './pages/list-entrada/list-entrada.component';
import { NewEntradaComponent } from './pages/new-entrada/new-entrada.component';
import { EditEntradaComponent } from './pages/edit-entrada/edit-entrada.component';
import { ShowEntradaComponent } from './pages/show-entrada/show-entrada.component';

const routes: Routes = [
  {
    path: '',
    component: EntradaComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListEntradaComponent },
      { path: 'new', component: NewEntradaComponent },
      { path: 'edit', component: EditEntradaComponent },
      { path: 'show', component: ShowEntradaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class entradaRoutingModule {}
