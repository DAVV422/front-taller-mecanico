import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo,gql } from 'apollo-angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

const createProducto = gql`
      mutation createProducto(
        $nombre:String!, 
        $descripcion:String!, 
        $precio:Float!,
        $stock:String!, 	
      ) {
      createProducto(
        nombre:$nombre,
        descripcion:$descripcion,
        precio:$precio,
        stock:$stock,
      ){
        id,
        nombre,
        descripcion,
        precio,
        stock
      }
    }
  `;
@Component({
  selector: 'app-new-producto',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    NgClass, NgIf, 
    AngularSvgIconModule, 
    ButtonComponent
  ],
  templateUrl: './new-producto.component.html',
  styleUrl: './new-producto.component.scss'
})
export class NewProductoComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;

  
  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {}

  
  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],   
      stock: ['', [Validators.required]],   
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
    const { nombre,descripcion,precio,stock} = this.form.value;
    this.apollo.mutate({ 
      mutation: createProducto,
      variables: {nombre,descripcion,precio,stock}
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
