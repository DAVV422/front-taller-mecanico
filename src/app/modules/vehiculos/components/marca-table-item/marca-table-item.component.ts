import { Component, Input } from '@angular/core';
import { Marca } from '../../interfaces/vehiculos.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[marca-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './marca-table-item.component.html',
  styleUrl: './marca-table-item.component.scss'
})
export class MarcaTableItemComponent {
  @Input() auction = <Marca>{};
}
