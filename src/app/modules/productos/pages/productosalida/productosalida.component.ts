import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo,gql } from 'apollo-angular';
import { GET_ALL_PRODUCTO } from 'src/app/core/constants/query';
import { Producto } from 'src/app/modules/inteface/modelos';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';


const createEntradaManual = gql`
      mutation createSalidaManual(
        $fecha:String!, 
        $motivo:String!, 
        $hora:String!, 
        $productoId:String!, 	
        $cantidad:Int!, 	
      ) {
      createSalidaManual(
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
  selector: 'app-productosalida',
  standalone: true,
  imports: [FormsModule, 
    ReactiveFormsModule, RouterLink, 
    NgClass, NgIf, 
    AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './productosalida.component.html',
  //templateUrl: './show-adddetalle.component.htl',
  styleUrl: './productosalida.component.scss'
})
export class ProductoSalidaComponent {

  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  public productos: Producto[] = []

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {

    this.apollo.watchQuery({
      query: GET_ALL_PRODUCTO,
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllProducto != null){
        this.productos = result.data.getAllProducto;  
        console.log("cargando productos "+this.productos)
      }
    });

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


  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.disabled = true;
    const { motivo,fecha,hora,productoId,cantidad} = this.form.value;
    this.apollo.mutate({ 
      mutation: createEntradaManual,
      variables: {motivo,fecha,hora,productoId,cantidad}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/productos']);
        }        
      }
    );

  }

  cancelar(){
    this.router.navigate(['/taller/productos']);
  }

}
