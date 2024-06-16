import { Component } from '@angular/core';
import { VentaHeaderComponent } from '../../components/venta-header/venta-header.component';
import { VentaTableComponent } from '../../components/venta-table/venta-table.component';
import { VentasTableItemComponent } from '../../components/ventas-table-item/ventas-table-item.component';

@Component({
  selector: 'app-list-venta',
  standalone: true,
  imports: [
    VentaHeaderComponent,
    VentaTableComponent,
    VentasTableItemComponent
  ],
  templateUrl: './list-venta.component.html',
  styleUrl: './list-venta.component.scss'
})
export class ListVentaComponent {

}
