import { Component,Input } from '@angular/core';
import { Salida } from 'src/app/modules/inteface/modelos';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[salida-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './salida-item.component.html',
  styleUrl: './salida-item.component.scss'
})
export class SalidaItemComponent {
  @Input() auction = <Salida>{};
}
