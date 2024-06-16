import { Component } from '@angular/core';
import { OrdenDeTrabajo } from '../../interfaces/orden-trabajo.interface';
import { NgFor } from '@angular/common';
import { OrdenesTrabajoTableItemComponent } from '../ordenes-trabajo-table-item/ordenes-trabajo-table-item.component';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_ORDENES_DE_TRABAJO } from 'src/app/core/constants/query';

@Component({
  selector: '[orden-trabajo-table]',
  standalone: true,
  imports: [NgFor, OrdenesTrabajoTableItemComponent],
  templateUrl: './orden-trabajo-table.component.html',
  styleUrl: './orden-trabajo-table.component.scss'
})
export class OrdenTrabajoTableComponent {
  public activeAuction: OrdenDeTrabajo[] = [];  

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_ORDENES_DE_TRABAJO,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllOrdenesDeTrabajo != null){
          this.activeAuction = result.data.getAllOrdenesDeTrabajo;
        }
      });    
    
  }

  ngOnInit(): void {}

  newOrdenTrabajo(): void {
    this.router.navigate(['/taller/orden-trabajo/new']);
  }
}
