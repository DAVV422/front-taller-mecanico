import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_DETALLE_VENTA_PRODUCTO } from 'src/app/core/constants/mutation';
import { GET_ALL_PRODUCTO } from 'src/app/core/constants/query';
import { Producto } from 'src/app/modules/inteface/modelos';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './new-detalle.component.html',
  styleUrl: './new-detalle.component.scss'
})
export class NewDetalleComponent {
  form!: FormGroup;
  submitted = false;  
  disabled: boolean = false;
  public productos: Producto[] = [];
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
      query: GET_ALL_PRODUCTO
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllProducto != null){
        this.productos = result.data.getAllProducto;
      }
    }); 
    this.form = this._formBuilder.group({
      precioUnitario: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      productoId: ['', [Validators.required]],           
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
    const { precioUnitario, cantidad, productoId } = this.form.value;
    const notaVentaId = this.id;
    const montoTotal: number = cantidad * precioUnitario;
    this.apollo.mutate({ 
      mutation: CREATE_DETALLE_VENTA_PRODUCTO,
      variables: { precioUnitario, montoTotal, cantidad, notaVentaId, productoId }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/ventas/show', this.id]);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/ventas/show', this.id]);
  }
}
