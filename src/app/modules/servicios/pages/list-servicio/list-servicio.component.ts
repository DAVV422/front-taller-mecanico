import { Component } from '@angular/core';
import { ServicioHeaderComponent } from '../../components/servicio-header/servicio-header.component';
import { ServicioTableComponent } from '../../components/servicio-table/servicio-table.component';
import { ServiciosTableItemComponent } from '../../components/servicios-table-item/servicios-table-item.component';

@Component({
  selector: 'app-list-servicio',
  standalone: true,
  imports: [
    ServicioHeaderComponent,
    ServicioTableComponent,
    ServiciosTableItemComponent
  ],
  templateUrl: './list-servicio.component.html',
  styleUrl: './list-servicio.component.scss'
})
export class ListServicioComponent {

}
