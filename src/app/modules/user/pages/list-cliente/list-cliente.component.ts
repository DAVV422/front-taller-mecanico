import { Component } from '@angular/core';
import { ClienteHeaderComponent } from '../../components/cliente-header/cliente-header.component';
import { ClienteItemComponent } from '../../components/cliente-item/cliente-item.component';
import { ClienteTableComponent } from '../../components/cliente-table/cliente-table.component';

@Component({
  selector: 'app-list-cliente',
  standalone: true,
  imports: [
    ClienteHeaderComponent,
    ClienteItemComponent,
    ClienteTableComponent
  ],
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.scss'
})
export class ListClienteComponent {

}
