import { Component } from '@angular/core';
import { ProveedorHeaderComponent } from '../../components/proveedor-header/proveedor-header.component';
import { ProveedorTableComponent } from '../../components/proveedor-table/proveedor-table.component';
import { ProveedorItemComponent } from '../../components/proveedor-item/proveedor-item.component';

@Component({
  selector: 'app-list-proveedor',
  standalone: true,
  imports: [
    ProveedorHeaderComponent,
    ProveedorTableComponent,
    ProveedorItemComponent
  ],
  templateUrl: './list-proveedor.component.html',
  styleUrl: './list-proveedor.component.scss'
})
export class ListProveedorComponent {

}
