import { Component } from '@angular/core';
import { UserTableComponent } from '../../components/users-table/users-table.component';
import { UsersTableItemComponent } from '../../components/users-table-item/users-table-item.component';
import { UserHeaderComponent } from '../../components/user-header/user-header.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [
    UserTableComponent,
    UsersTableItemComponent,
    UserHeaderComponent
  ],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

}
