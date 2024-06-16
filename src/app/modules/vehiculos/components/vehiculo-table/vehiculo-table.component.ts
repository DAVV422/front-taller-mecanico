import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { VehiculoTableItemComponent } from '../vehiculo-table-item/vehiculo-table-item.component';
import { Vehiculo } from '../../interfaces/vehiculos.interface';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_VEHICULOS } from '../../../../core/constants/query';

@Component({
  selector: '[vehiculo-table]',
  standalone: true,
  imports: [NgFor, VehiculoTableItemComponent],
  templateUrl: './vehiculo-table.component.html',
  styleUrl: './vehiculo-table.component.scss'
})
export class VehiculoTableComponent {
  public activeAuction: Vehiculo[] = [];  

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_VEHICULOS,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllVehiculos != null){
          this.activeAuction = result.data.getAllVehiculos;
        }
      });    
    
  }

  ngOnInit(): void {}

  newVehiculo(): void {
    this.router.navigate(['/taller/vehiculos/new']);
  }
}
