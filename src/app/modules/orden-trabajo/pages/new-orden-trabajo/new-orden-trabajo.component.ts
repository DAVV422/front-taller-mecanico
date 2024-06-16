import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_ORDEN_DE_TRABAJO } from '../../../../core/constants/mutation';
import { GET_ALL_PERSONAL, GET_ALL_SERVICIOS } from '../../../../core/constants/query';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DetalleVentaServicio } from 'src/app/modules/ventas/interfaces/venta.interface';
import { Personal } from 'src/app/modules/user/interfaces/user.interface';

@Component({
  selector: 'app-new-orden-trabajo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './new-orden-trabajo.component.html',
  styleUrl: './new-orden-trabajo.component.scss'
})
export class NewOrdenTrabajoComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  public servicios: DetalleVentaServicio[] = [];
  public personal: Personal[] = [];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {
    this.apollo
      .watchQuery({
        query: GET_ALL_SERVICIOS,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllServicios != null){
          this.servicios = result.data.getAllServicios;
        }
      }); 

    this.apollo
      .watchQuery({
        query: GET_ALL_PERSONAL,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllPersonal != null){
          this.personal = result.data.getAllPersonal;
        }
      }); 
      
  }

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fechaFin: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
      personalId: ['', [Validators.required]],
      detalleVentaServicioId: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.disabled = true;
    const { fechaInicio, fechaFin, estado, observacion, personalId, detalleVentaServicioId } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_ORDEN_DE_TRABAJO,
      variables: { fechaInicio, fechaFin, estado, observacion, personalId, detalleVentaServicioId }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/orden-trabajo']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/orden-trabajo']);
  }
}
