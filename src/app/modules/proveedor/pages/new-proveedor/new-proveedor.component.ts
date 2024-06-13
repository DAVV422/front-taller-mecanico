import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo, gql } from 'apollo-angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

const createProveedor = gql`
      mutation createProveedor(
        $nombre:String!, 
        $direccion:String!, 
        $celular:String!,
        $email:String!,
        $descripcion:String!, 	
      ) {
      createProveedor(
        nombre:$nombre,
        direccion:$direccion,
        celular:$celular,
        email:$email,
        descripcion:$descripcion
      ){
        id,
        nombre,
        direccion,
        celular,
        email,
        descripcion
      }
    }
  `;
@Component({
  selector: 'app-new-proveedor',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    NgClass, NgIf, 
    AngularSvgIconModule, 
    ButtonComponent
  ],
  templateUrl: './new-proveedor.component.html',
  styleUrl: './new-proveedor.component.scss'
})
export class NewProveedorComponent {
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
      direccion: ['', [Validators.required]],
      celular: ['', [Validators.required]],   
      email: ['', [Validators.required]],  
      descripcion: ['', [Validators.required]],  
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
    const { nombre,direccion,celular,email,descripcion} = this.form.value;
    this.apollo.mutate({ 
      mutation: createProveedor,
      variables: {nombre,direccion,celular,email,descripcion}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/proveedor']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/proveedor']);
  }
}
