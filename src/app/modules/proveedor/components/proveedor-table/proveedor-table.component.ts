import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { Proveedor } from 'src/app/modules/inteface/modelos';
import { ProveedorItemComponent } from '../proveedor-item/proveedor-item.component';
import { NgFor } from '@angular/common';


const getAllProveedor = gql`
    query getAllProveedor {
      getAllProveedor {
        id,
        nombre,
        direccion,
        celular,
        email,
        descripcion
      }
    }
  `;
@Component({
  selector: '[proveedor-table]',
  standalone: true,
  imports: [NgFor, ProveedorItemComponent],
  templateUrl: './proveedor-table.component.html',
  styleUrl: './proveedor-table.component.scss'
})
export class ProveedorTableComponent {
  public activeAuction: Proveedor[] = [];
  public proveedor: Proveedor[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllProveedor,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllProveedor != null){
          this.activeAuction = result.data.getAllProveedor;  
        }
      });    
    
  }

  ngOnInit(): void {}
  
  newProveedor(): void {
    this.router.navigate(['/taller/proveedor/new']);
  }

}
