import { Component, Input } from '@angular/core';
import { Servicio } from '../../interfaces/servicio.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[servicios-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './servicios-table-item.component.html',
  styleUrl: './servicios-table-item.component.scss'
})
export class ServiciosTableItemComponent {
  @Input() auction = <Servicio>{};
}
