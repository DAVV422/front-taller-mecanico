import { Component } from '@angular/core';
import { ProductoHeaderComponent } from '../../components/producto-header/producto-header.component';
import { ProductoTableComponent } from '../../components/producto-table/producto-table.component';
import { ProductoItemComponent } from '../../components/producto-item/producto-item.component';

@Component({
  selector: 'app-list-producto',
  standalone: true,
  imports: [
    ProductoHeaderComponent,
    ProductoTableComponent,
    ProductoItemComponent
  ],
  templateUrl: './list-producto.component.html',
  styleUrl: './list-producto.component.scss'
})
export class ListProductoComponent {

}
