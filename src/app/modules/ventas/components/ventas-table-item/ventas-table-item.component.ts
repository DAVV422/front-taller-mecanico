import { Component, Input } from '@angular/core';
import { NotaVenta } from '../../interfaces/venta.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[ventas-table-item]',
  standalone: true,
  imports: [CurrencyPipe, AngularSvgIconModule],
  templateUrl: './ventas-table-item.component.html',
  styleUrl: './ventas-table-item.component.scss'
})
export class VentasTableItemComponent {
  @Input() auction = <NotaVenta>{};
}
