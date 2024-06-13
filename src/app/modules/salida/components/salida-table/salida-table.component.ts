import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { Salida } from 'src/app/modules/inteface/modelos';
import { NgFor } from '@angular/common';
import { SalidaItemComponent } from '../salida-item/salida-item.component';

const getAllSalida = gql`
    query getAllSalida {
      getAllSalida {
        id,
        fecha,
        motivo,
        hora
      }
    }
  `;

  @Component({
    selector: '[salida-table]',
    standalone: true,
    imports: [NgFor, SalidaItemComponent],
    templateUrl: './salida-table.component.html',
    styleUrl: './salida-table.component.scss'
  })  
export class SalidaTableComponent {


  public activeAuction: Salida[] = [];
  public salida: Salida[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllSalida,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllSalida != null){
          this.activeAuction = result.data.getAllSalida;  
        }
      });    
    
  }
  ngOnInit(): void {}

  newSalida(): void {
    this.router.navigate(['/taller/salida/new']);
  }

}
