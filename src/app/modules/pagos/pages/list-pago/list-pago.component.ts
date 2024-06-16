import { Component } from '@angular/core';
import { PagoHeaderComponent } from '../../components/pago-header/pago-header.component';
import { PagoTableComponent } from '../../components/pago-table/pago-table.component';
import { PagosTableItemComponent } from '../../components/pagos-table-item/pagos-table-item.component';

@Component({
  selector: 'app-list-pago',
  standalone: true,
  imports: [
    PagoHeaderComponent,
    PagoTableComponent,
    PagosTableItemComponent
  ],
  templateUrl: './list-pago.component.html',
  styleUrl: './list-pago.component.scss'
})
export class ListPagoComponent {

}
