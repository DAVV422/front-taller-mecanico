import { Component } from '@angular/core';
import { CitaHeaderComponent } from '../../components/cita-header/cita-header.component';
import { CitaTableComponent } from '../../components/cita-table/cita-table.component';
import { CitaTableItemComponent } from '../../components/cita-table-item/cita-table-item.component';

@Component({
  selector: 'app-list-cita',
  standalone: true,
  imports: [
    CitaHeaderComponent,
    CitaTableComponent,
    CitaTableItemComponent
  ],
  templateUrl: './list-cita.component.html',
  styleUrl: './list-cita.component.scss'
})
export class ListCitaComponent {

}
