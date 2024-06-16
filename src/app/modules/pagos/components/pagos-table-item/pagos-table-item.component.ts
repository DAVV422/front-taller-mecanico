import { Component, Input } from '@angular/core';
import { PlanDePago } from '../../interfaces/pagos.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[pagos-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './pagos-table-item.component.html',
  styleUrl: './pagos-table-item.component.scss'
})
export class PagosTableItemComponent {
  @Input() auction = <PlanDePago>{};
}
