import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehiculoHeaderComponent } from '../../components/vehiculo-header/vehiculo-header.component';
import { VehiculoTableComponent } from '../../components/vehiculo-table/vehiculo-table.component';
import { VehiculoTableItemComponent } from '../../components/vehiculo-table-item/vehiculo-table-item.component';

@Component({
  selector: 'app-list-vehiculo',
  standalone: true,
  imports: [
    VehiculoHeaderComponent,
    VehiculoTableComponent,
    VehiculoTableItemComponent
  ],
  templateUrl: './list-vehiculo.component.html',
  styleUrl: './list-vehiculo.component.scss'
})
export class ListVehiculoComponent implements  OnInit,OnDestroy {
  ngOnDestroy(): void {    
  }
  ngOnInit(): void {  
  }

}
