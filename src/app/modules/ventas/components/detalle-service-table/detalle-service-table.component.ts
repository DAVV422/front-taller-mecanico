import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DetalleVentaServicio, NotaVenta } from '../../interfaces/venta.interface';
import { DetalleServiceTableItemComponent } from '../detalle-service-table-item/detalle-service-table-item.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_DETALLE_VENTA_SERVICIO_OF_NOTA_VENTA } from 'src/app/core/constants/query';

@Component({
  selector: '[detalle-service-table]',
  standalone: true,
  imports: [DetalleServiceTableItemComponent, NgFor],
  templateUrl: './detalle-service-table.component.html',
  styleUrl: './detalle-service-table.component.scss'
})
export class DetalleServiceTableComponent implements OnInit, OnDestroy {  
  public activeAuction2: DetalleVentaServicio[] = [];
  public id!: String;
  public query!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly apollo: Apollo
  ) {
    this.route.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnInit(): void {    
    console.log("inicia el componente");
    const notaVentaId: String = this.id;
    console.log(notaVentaId);
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
    const id = this.id
    this.router.navigate(['/taller/ventas/detalleServicio/new', id]);
  }

  ngOnDestroy(): void {
    this.query.unSubscribe()
  }
}
