import { Component } from '@angular/core';
import { DetalleSalidaHeaderComponent } from '../../components/detalle-salida-header/detalle-salida-header.component';
import { DetalleSalidaTableComponent } from '../../components/detalle-salida-table/detalle-salida-table.component';
import { DetalleSalidaItemComponent } from '../../components/detalle-salida-item/detalle-salida-item.component';

@Component({
  selector: 'app-list-detalle-salida',
  standalone: true,
  imports: [
    DetalleSalidaHeaderComponent,
    DetalleSalidaTableComponent,
    DetalleSalidaItemComponent
  ],
  templateUrl: './list-detalle-salida.component.html',
  styleUrl: './list-detalle-salida.component.scss'
})
export class ListDetalleSalidaComponent {

}
