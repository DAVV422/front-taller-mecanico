import { Component } from '@angular/core';
import { DetalleVentaServicio } from '../../interfaces/venta.interface';
import { DetalleServiceTableItemComponent } from '../detalle-service-table-item/detalle-service-table-item.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_DETALLE_VENTA_SERVICIO_OF_NOTA_VENTA } from 'src/app/core/constants/query';

@Component({
  selector: '[detalle-service-table]',
  standalone: true,
  imports: [DetalleServiceTableItemComponent, NgFor],
  templateUrl: './detalle-service-table.component.html',
  styleUrl: './detalle-service-table.component.scss'
})
export class DetalleServiceTableComponent {  
  public activeAuction2: DetalleVentaServicio[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    const notaVentaId: String = "666f67e84eecc74417220127";
    this.apollo
      .watchQuery({
        query: GET_ALL_DETALLE_VENTA_SERVICIO_OF_NOTA_VENTA,
        variables: { notaVentaId }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllDetalleVentaServicioOfNotaVenta != null){
          this.activeAuction2 = result.data.getAllDetalleVentaServicioOfNotaVenta;          
        }
      }); 
  }

  newDetalleServicio(): void {
    this.router.navigate(['/taller/ventas/detalleServicio/new']);
  }

  ngOnDestroy(){

  }
}
