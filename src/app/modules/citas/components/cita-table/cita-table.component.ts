import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CitaTableItemComponent } from '../cita-table-item/cita-table-item.component';
import { GET_ALL_CITAS } from 'src/app/core/constants/query';
import { Cita } from '../../interface/cita.interface';

@Component({
  selector: '[cita-table]',
  standalone: true,
  imports: [NgFor, CitaTableItemComponent],
  templateUrl: './cita-table.component.html',
  styleUrl: './cita-table.component.scss'
})
export class CitaTableComponent {
  public activeAuction: Cita[] = [];  

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_CITAS,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllCitas != null){
          this.activeAuction = result.data.getAllCitas;
        }
      });    
    
  }

  ngOnInit(): void {}

  newCita(): void {
    this.router.navigate(['/taller/citas/new']);
  }
}
