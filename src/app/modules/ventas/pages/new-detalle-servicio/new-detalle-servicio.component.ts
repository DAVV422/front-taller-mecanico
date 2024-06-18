import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_DETALLE_VENTA_SERVICIO, CREATE_ORDEN_DE_TRABAJO } from 'src/app/core/constants/mutation';
import { GET_ALL_SERVICIOS, GET_ALL_VEHICULOS } from 'src/app/core/constants/query';
import { Servicio } from 'src/app/modules/servicios/interfaces/servicio.interface';
import { Vehiculo } from 'src/app/modules/vehiculos/interfaces/vehiculos.interface';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-detalle-servicio',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './new-detalle-servicio.component.html',
  styleUrl: './new-detalle-servicio.component.scss'
})
export class NewDetalleServicioComponent {
  form!: FormGroup;
  submitted = false;  
  disabled: boolean = false;
  public servicios: Servicio[] = [];
  public vehiculos: Vehiculo[] = [];
  public id:String = "";

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly apollo: Apollo
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_ALL_SERVICIOS
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllServicios != null){
        this.servicios = result.data.getAllServicios;
      }
    });     

    this.apollo.watchQuery({
      query: GET_ALL_VEHICULOS
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllVehiculos != null){
        this.vehiculos = result.data.getAllVehiculos;
      }
    }); 
    this.form = this._formBuilder.group({
      vehiculoId: ['', [Validators.required]],
      servicioId: ['', [Validators.required]],           
    });

    this.route.params.subscribe(
      (params: Params) => this.id = params['id']
    );
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
    const { vehiculoId, servicioId } = this.form.value;
    const notaVentaId = this.id;    
    let detalleVentaServicioId = "";
    this.apollo.mutate({ 
      mutation: CREATE_DETALLE_VENTA_SERVICIO,
      variables: { vehiculoId, servicioId, notaVentaId }
    }).subscribe(      
      (data: any) => {
        console.log(data);
        detalleVentaServicioId = data.createDetalleVentaServicio.id;
      }
    ).unsubscribe();

    const estado: String = "Finalizado";
    const fechaInicio: String = Date.now().toString();
    const fechaFin: String = "";
    const personalId: String = "";
    const observacion: String = "Creado por detalle de Venta de Servicio"
    console.log("ingresa");
    this.apollo.mutate({
      mutation: CREATE_ORDEN_DE_TRABAJO,
      variables: { estado, fechaInicio, fechaFin, personalId, observacion, detalleVentaServicioId }
    }).subscribe( (data) => {
      console.log(data);
    }).unsubscribe();
    this.router.navigate(['/taller/ventas/show', this.id]);
  }

  cancelar(){
    this.router.navigate(['/taller/ventas/show', this.id]);
  }
}
