import { Component, Input } from '@angular/core';
import { DetalleVentaProducto, DetalleVentaServicio } from '../../interfaces/venta.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[detalle-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './detalle-table-item.component.html',
  styleUrl: './detalle-table-item.component.scss'
})
export class DetalleTableItemComponent {
  @Input() auctionProducto = <DetalleVentaProducto>{};  
}
