import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_PLANES_DE_PAGO } from 'src/app/core/constants/query';
import { PlanDePago } from '../../interfaces/pagos.interface';
import { NgFor } from '@angular/common';
import { PagosTableItemComponent } from '../pagos-table-item/pagos-table-item.component';

@Component({
  selector: '[pago-table]',
  standalone: true,
  imports: [NgFor, PagosTableItemComponent],
  templateUrl: './pago-table.component.html',
  styleUrl: './pago-table.component.scss'
})
export class PagoTableComponent {
  public activeAuction: PlanDePago[] = [];  

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_PLANES_DE_PAGO,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllPlanesDePago != null){
          this.activeAuction = result.data.getAllPlanesDePago;
        }
      });    
    
  }

  ngOnInit(): void {}

  newPlanPago(): void {
    this.router.navigate(['/taller/pagos/new']);
  }
}
