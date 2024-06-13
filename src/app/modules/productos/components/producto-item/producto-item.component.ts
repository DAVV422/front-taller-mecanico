import { Component,Input } from '@angular/core';
import { Producto } from 'src/app/modules/inteface/modelos';

@Component({
  selector: '[producto-table-item]',
  standalone: true,
  imports: [],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.scss'
})
export class ProductoItemComponent {
  @Input() auction = <Producto>{};
}
