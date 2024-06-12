import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Cliente } from '../../interfaces/user.interface';

const getAllClientes = gql`
    query getAllCliente {
      getAllCliente {
        apellido,
        celular,        
        nit,        
        id,
        nombre,
        usuarioId
      }
    }
  `;
@Component({
  selector: 'app-cliente-table',
  standalone: true,
  imports: [],
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
        query: getAllClientes,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllCliente != null){
          this.activeAuction = result.data.getAllCliente;
        }
      });    
    
  }

  ngOnInit(): void {}

  newPersonal(): void {
    this.router.navigate(['/taller/users/clientes/new']);
  }
}
