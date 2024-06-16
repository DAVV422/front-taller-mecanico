import { Component } from '@angular/core';
import { NotaVenta } from '../../interfaces/venta.interface';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { NgFor } from '@angular/common';
import { VentasTableItemComponent } from '../ventas-table-item/ventas-table-item.component';
import { GET_ALL_NOTAS_VENTA } from 'src/app/core/constants/query';

@Component({
  selector: '[venta-table]',
  standalone: true,
  imports: [NgFor, VentasTableItemComponent],
  templateUrl: './venta-table.component.html',
  styleUrl: './venta-table.component.scss'
})
export class VentaTableComponent {
  public activeAuction: NotaVenta[] = [];  

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_NOTAS_VENTA,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllNotasVenta != null){
          this.activeAuction = result.data.getAllNotasVenta;
        }
      });    
    
  }

  ngOnInit(): void {}

  newVenta(): void {
    this.router.navigate(['/taller/ventas/new']);
  }
}
