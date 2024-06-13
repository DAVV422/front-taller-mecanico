import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Cliente } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';
import { ClienteItemComponent } from '../cliente-item/cliente-item.component';
import { GET_ALL_CLIENTES } from 'src/app/core/constants/query';

@Component({
  selector: '[cliente-table]',
  standalone: true,
  imports: [NgFor, ClienteItemComponent],
  templateUrl: './cliente-table.component.html',
  styleUrl: './cliente-table.component.scss'
})
export class ClienteTableComponent {
  public activeAuction: Cliente[] = [];
  public personal: Cliente[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_CLIENTES,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllClientes != null){
          this.activeAuction = result.data.getAllClientes;
        }
      });    
    
  }

  ngOnInit(): void {}

  newCliente(): void {
    this.router.navigate(['/taller/users/clientes/new']);
  }
}
