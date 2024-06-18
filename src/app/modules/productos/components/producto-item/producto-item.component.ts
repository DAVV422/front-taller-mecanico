import { CurrencyPipe } from '@angular/common';
import { Component,Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Producto } from '../../../../modules/inteface/modelos';

@Component({
  selector: '[producto-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.scss'
})
export class ProductoItemComponent {
  @Input() auction = <Producto>{};
}
