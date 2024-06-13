import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MarcaTableItemComponent } from '../marca-table-item/marca-table-item.component';
import { Router } from '@angular/router';
import { Marca } from '../../interfaces/vehiculos.interface';
import { Apollo } from 'apollo-angular';
import { GET_ALL_MARCAS } from 'src/app/core/constants/query';

@Component({
  selector: '[marca-table]',
  standalone: true,
  imports: [NgFor, MarcaTableItemComponent],
  templateUrl: './marca-table.component.html',
  styleUrl: './marca-table.component.scss'
})
export class MarcaTableComponent {
  public activeAuction: Marca[] = [];
  public personal: Marca[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_MARCAS,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllMarcas != null){
          this.activeAuction = result.data.getAllMarcas;
        }
      });    
    
  }

  ngOnInit(): void {}

  newMarca(): void {
    this.router.navigate(['/taller/vehiculos/marcas/new']);
  }
}
