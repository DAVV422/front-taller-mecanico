import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_ALL_PRODUCTO } from 'src/app/core/constants/query';
import { Producto } from 'src/app/modules/inteface/modelos';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
const createEntrada = gql`
      mutation createEntrada(
        $fecha:String!, 
        $motivo:String!, 
        $hora:String!, 
        $productoId:String!, 	
        $cantidad:Int!, 	
      ) {
      createEntrada(
        fecha:$fecha,
        motivo:$motivo,
        hora:$hora,
        productoId:$productoId,
        cantidad:$cantidad,
      ){
        id,
        fecha,
        motivo,
        hora,
        productoId,
        cantidad
      }
    }
  `;


@Component({
  selector: 'app-new-entrada',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './new-entrada.component.html',
  styleUrl: './new-entrada.component.scss'
})
export class NewEntradaComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  public productos: Producto[] = []
  
  private querySubscription: Subscription | undefined;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {

    this.querySubscription= this.apollo.watchQuery({
      query: GET_ALL_PRODUCTO,
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllProducto != null){
        this.productos = result.data.getAllProducto;  
        console.log("cargando productos "+this.productos)
      }
    });

  }

  
  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fecha: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],   
      productoId: ['', [Validators.required]],
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
    const { fecha,motivo,hora,productoId,cantidad} = this.form.value;
    this.apollo.mutate({ 
      mutation: createEntrada,
      variables: {fecha,motivo,hora,productoId,cantidad}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/entrada']);
        }        
      }
    );

  }

  cancelar(){
    this.router.navigate(['/taller/entrada']);
  }

  
  ngOnDestroy(): void {
    // Aquí limpiamos las suscripciones y liberamos recursos
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
