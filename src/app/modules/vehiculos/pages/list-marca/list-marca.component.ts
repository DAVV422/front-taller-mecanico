import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarcaHeaderComponent } from '../../components/marca-header/marca-header.component';
import { MarcaTableComponent } from '../../components/marca-table/marca-table.component';
import { MarcaTableItemComponent } from '../../components/marca-table-item/marca-table-item.component';

@Component({
  selector: 'app-list-marca',
  standalone: true,
  imports: [
    MarcaHeaderComponent,
    MarcaTableComponent,
    MarcaTableItemComponent
  ],
  templateUrl: './list-marca.component.html',
  styleUrl: './list-marca.component.scss'
})
export class ListMarcaComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {    
  }
  ngOnInit(): void {
  }

}
