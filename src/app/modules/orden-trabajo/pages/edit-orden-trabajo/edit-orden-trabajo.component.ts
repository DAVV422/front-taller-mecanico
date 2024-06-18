import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ORDEN_DE_TRABAJO_BY_ID } from 'src/app/core/constants/query';
import { OrdenDeTrabajo } from '../../interfaces/orden-trabajo.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { UPDATE_ORDEN_DE_TRABAJO } from 'src/app/core/constants/mutation';

@Component({
  selector: 'app-edit-orden-trabajo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './edit-orden-trabajo.component.html',
  styleUrl: './edit-orden-trabajo.component.scss'
})
export class EditOrdenTrabajoComponent {
  form!: FormGroup;
  submitted = false;
  disabled: boolean = false;
  public id = "";
  public orden!: OrdenDeTrabajo;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo,
    private readonly route: ActivatedRoute,
  ) {
    this.route.params.subscribe(
      (params: Params) => this.id = params['id']
    )
    this.apollo
      .watchQuery({
        query: GET_ORDEN_DE_TRABAJO_BY_ID,        
        variables: { id: this.id }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getOrdenDeTrabajoById != null){
          this.orden = result.data.getOrdenDeTrabajoById;
        }
      });
      
  }

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fechaFin: [this.orden.fechaFin, [Validators.required]],
      fechaInicio: [this.orden.fechaInicio, [Validators.required]],
      estado: [this.orden.estado, [Validators.required]],
      observacion: [this.orden.observacion, [Validators.required]],
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
    const { fechaInicio, fechaFin, estado, observacion } = this.form.value;
    const personalId = this.orden.personalId;
    const detalleVentaServicioId = this.orden.detalleVentaServicioId;
    this.apollo.mutate({ 
      mutation: UPDATE_ORDEN_DE_TRABAJO,
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
