import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalidaComponent } from './salida.component';
import { ListSalidaComponent } from './pages/list-salida/list-salida.component';
import { NewSalidaComponent } from './pages/new-salida/new-salida.component';
import { EditSalidaComponent } from './pages/edit-salida/edit-salida.component';
import { ShowSalidaComponent } from './pages/show-salida/show-salida.component';

const routes: Routes = [
  {
    path: '',
    component: SalidaComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListSalidaComponent },
      { path: 'new', component: NewSalidaComponent },
      { path: 'edit', component: EditSalidaComponent },
      { path: 'show', component: ShowSalidaComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class salidasRoutingModule {}
