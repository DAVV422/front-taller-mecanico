import { Component,Input } from '@angular/core';
import { Entrada, Salida } from 'src/app/modules/inteface/modelos';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[entrada-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './entrada-item.component.html',
  styleUrl: './entrada-item.component.scss'
})
export class EntradaItemComponent {
  @Input() auction = <Entrada>{};
}
