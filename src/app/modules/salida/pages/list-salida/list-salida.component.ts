import { Component } from '@angular/core';
import { SalidaHeaderComponent } from '../../components/salida-header/salida-header.component';
import { SalidaTableComponent } from '../../components/salida-table/salida-table.component';
import { SalidaItemComponent } from '../../components/salida-item/salida-item.component';

@Component({
  selector: 'app-list-salida',
  standalone: true,
  imports: [
    SalidaHeaderComponent,
    SalidaTableComponent,
    SalidaItemComponent

  ],
  templateUrl: './list-salida.component.html',
  styleUrl: './list-salida.component.scss'
})
export class ListSalidaComponent {

}
