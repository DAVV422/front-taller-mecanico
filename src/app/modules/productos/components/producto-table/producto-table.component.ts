import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { Producto } from 'src/app/modules/inteface/modelos';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { NgFor } from '@angular/common';


const getAllProducto = gql`
    query getAllProducto {
      getAllProducto {
        id,
        nombre,
        descripcion,
        precio,
        stock
      }
    }
  `;
@Component({
  selector: '[producto-table]',
  standalone: true,
  imports: [NgFor, ProductoItemComponent],
  templateUrl: './producto-table.component.html',
  styleUrl: './producto-table.component.scss'
})
export class ProductoTableComponent {
  public activeAuction: Producto[] = [];
  public producto: Producto[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllProducto,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllProducto != null){
          this.activeAuction = result.data.getAllProducto;  
        }
      });    
    
  }

  ngOnInit(): void {}
  
  newProducto(): void {
    this.router.navigate(['/taller/productos/new']);
  }

}
