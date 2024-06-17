import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { Entrada, Salida } from 'src/app/modules/inteface/modelos';
import { NgFor } from '@angular/common';
import { EntradaItemComponent } from '../entrada-item/entrada-item.component';

const getAllEntradas = gql`
    query getAllEntradas {
      getAllEntradas {
        id,
        fecha,
        motivo,
        hora
      }
    }
  `;

  @Component({
    selector: '[entrada-table]',
    standalone: true,
    imports: [NgFor, EntradaItemComponent],
    templateUrl: './entrada-table.component.html',
    styleUrl: './entrada-table.component.scss'
  })  
export class EntradaTableComponent {


  public activeAuction: Entrada[] = [];
  public entrada: Entrada[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllEntradas,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllEntradas != null){
          this.activeAuction = result.data.getAllEntradas;  
        }
      });    
    
  }
  ngOnInit(): void {}

  newEntrada(): void {
    this.router.navigate(['/taller/entrada/new']);
  }

}
