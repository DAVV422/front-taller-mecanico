import { Component, Input } from '@angular/core';
import { DetalleVentaServicio } from '../../interfaces/venta.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[detalle-service-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './detalle-service-table-item.component.html',
  styleUrl: './detalle-service-table-item.component.scss'
})
export class DetalleServiceTableItemComponent {
  @Input() auctionServicio = <DetalleVentaServicio>{};  
}
