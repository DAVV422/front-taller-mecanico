import { Component } from '@angular/core';
import { EntradaHeaderComponent } from '../../components/entrada-header/entrada-header.component';
import { EntradaTableComponent } from '../../components/entrada-table/entrada-table.component';
import { EntradaItemComponent } from '../../components/entrada-item/entrada-item.component';

@Component({
  selector: 'app-list-entrada',
  standalone: true,
  imports: [
    EntradaHeaderComponent,
    EntradaTableComponent,
    EntradaItemComponent

  ],
  templateUrl: './list-entrada.component.html',
  styleUrl: './list-entrada.component.scss'
})
export class ListEntradaComponent {

}
