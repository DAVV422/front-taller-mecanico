import { Component } from '@angular/core';
import { OrdenTrabajoHeaderComponent } from '../../components/orden-trabajo-header/orden-trabajo-header.component';
import { OrdenTrabajoTableComponent } from '../../components/orden-trabajo-table/orden-trabajo-table.component';
import { OrdenesTrabajoTableItemComponent } from '../../components/ordenes-trabajo-table-item/ordenes-trabajo-table-item.component';

@Component({
  selector: 'app-list-orden-trabajo',
  standalone: true,
  imports: [
    OrdenTrabajoHeaderComponent,
    OrdenTrabajoTableComponent,
    OrdenesTrabajoTableItemComponent
  ],
  templateUrl: './list-orden-trabajo.component.html',
  styleUrl: './list-orden-trabajo.component.scss'
})
export class ListOrdenTrabajoComponent {

}
