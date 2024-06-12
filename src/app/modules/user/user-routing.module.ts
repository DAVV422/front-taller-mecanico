import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserComponent } from './user.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ShowUserComponent } from './pages/show-user/show-user.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { NewClienteComponent } from './pages/new-cliente/new-cliente.component';
import { EditClienteComponent } from './pages/edit-cliente/edit-cliente.component';
import { ShowClienteComponent } from './pages/show-cliente/show-cliente.component';
import { ListPersonalComponent } from './pages/list-personal/list-personal.component';
import { NewPersonalComponent } from './pages/new-personal/new-personal.component';
import { EditPersonalComponent } from './pages/edit-personal/edit-personal.component';
import { ShowPersonalComponent } from './pages/show-personal/show-personal.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListUserComponent },
      { path: 'new', component: CreateUserComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'show', component: ShowUserComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
  {
    path: 'clientes',
    component: UserComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListClienteComponent },
      { path: 'new', component: NewClienteComponent },
      { path: 'edit', component: EditClienteComponent },
      { path: 'show', component: ShowClienteComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
  {
    path: 'personal',
    component: UserComponent,    
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListPersonalComponent },
      { path: 'new', component: NewPersonalComponent },
      { path: 'edit', component: EditPersonalComponent },
      { path: 'show', component: ShowPersonalComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
