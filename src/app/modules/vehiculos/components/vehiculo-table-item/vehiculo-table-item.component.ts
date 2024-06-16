import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculos.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[vehiculo-table-item]',
  standalone: true,
  imports: [CurrencyPipe, AngularSvgIconModule],
  templateUrl: './vehiculo-table-item.component.html',
  styleUrl: './vehiculo-table-item.component.scss'
})
export class VehiculoTableItemComponent {
  @Input() auction = <Vehiculo>{};
}
