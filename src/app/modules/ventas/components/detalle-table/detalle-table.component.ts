import { NgFor } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DetalleTableItemComponent } from '../detalle-table-item/detalle-table-item.component';
import { DetalleVentaProducto, DetalleVentaServicio, NotaVenta } from '../../interfaces/venta.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo, Subscription } from 'apollo-angular';
import { GET_ALL_DETALLE_VENTA_PRODUCTO_OF_NOTA_VENTA } from 'src/app/core/constants/query';

@Component({
  selector: '[detalle-table]',
  standalone: true,
  imports: [NgFor, DetalleTableItemComponent],
  templateUrl: './detalle-table.component.html',
  styleUrl: './detalle-table.component.scss'
})
export class DetalleTableComponent implements OnInit, OnDestroy {
  public activeAuction: DetalleVentaProducto[] = [];
  public id!: String;
  public query: any;

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
    
    const notaVentaId: String = this.id;
    console.log(notaVentaId)
    this.query = this.apollo
      .watchQuery({
        query: GET_ALL_DETALLE_VENTA_PRODUCTO_OF_NOTA_VENTA,
        variables: { notaVentaId }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllDetalleVentaProductoOfNotaVenta != null){
          this.activeAuction = result.data.getAllDetalleVentaProductoOfNotaVenta;          
        }
      });
  }

  newDetalleProducto(): void {
    const id: String = this.id;
    console.log(id);
    this.router.navigate(['/taller/ventas/detalleProducto/new', id]);
  }

  ngOnDestroy(): void {
    try {
      this.query.unsubscribe();
    } catch (error) {
      console.log(error);
    } 
  }
}
