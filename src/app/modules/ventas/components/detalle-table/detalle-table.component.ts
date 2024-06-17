import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetalleTableItemComponent } from '../detalle-table-item/detalle-table-item.component';
import { DetalleVentaProducto, DetalleVentaServicio } from '../../interfaces/venta.interface';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_DETALLE_VENTA_PRODUCTO_OF_NOTA_VENTA, GET_ALL_DETALLE_VENTA_SERVICIO_OF_NOTA_VENTA } from 'src/app/core/constants/query';

@Component({
  selector: '[detalle-table]',
  standalone: true,
  imports: [NgFor, DetalleTableItemComponent],
  templateUrl: './detalle-table.component.html',
  styleUrl: './detalle-table.component.scss'
})
export class DetalleTableComponent implements OnInit, OnDestroy {
  public activeAuction: DetalleVentaProducto[] = [];
  public activeAuction2: DetalleVentaServicio[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    const notaVentaId: String = "666f67e84eecc74417220127";       
    this.apollo
      .watchQuery({
        query: GET_ALL_DETALLE_VENTA_PRODUCTO_OF_NOTA_VENTA,
        variables: { notaVentaId }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllDetalleVentaProductoOfNotaVenta != null){
          this.activeAuction = result.data.getAllDetalleVentaProductoOfNotaVenta;          
        }
      }); 
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

  newDetalleProducto(): void {
    this.router.navigate(['/taller/ventas/detalle/new']);
  }

  ngOnDestroy(){

  }
}
