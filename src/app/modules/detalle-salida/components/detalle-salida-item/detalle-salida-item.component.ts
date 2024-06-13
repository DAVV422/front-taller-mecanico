import { Component,Input } from '@angular/core';
import { DetalleSalida } from 'src/app/modules/inteface/modelos';

@Component({
  selector: '[detalle-salida-table-item]',
  standalone: true,
  imports: [],
  templateUrl: './detalle-salida-item.component.html',
  styleUrl: './detalle-salida-item.component.scss'
})
export class DetalleSalidaItemComponent {
  @Input() auction = <DetalleSalida>{};
}
