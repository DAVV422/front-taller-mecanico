import { Component, Input } from '@angular/core';
import { NotaVenta } from '../../interfaces/venta.interface';

@Component({
  selector: 'app-detalle-header',
  standalone: true,
  imports: [],
  templateUrl: './detalle-header.component.html',
  styleUrl: './detalle-header.component.scss'
})
export class DetalleHeaderComponent {
  @Input() auction = <NotaVenta>{}; 
}
