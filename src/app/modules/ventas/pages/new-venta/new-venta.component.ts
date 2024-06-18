import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo ,gql } from 'apollo-angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

const createVenta = gql`
      mutation createSalida(
        $fecha:String!, 
        $motivo:String!, 
        $hora:String!, 	
      ) {
      createSalida(
        fecha:$fecha,
        motivo:$motivo,
        hora:$hora,
      ){
        id,
        fecha,
        motivo,
        hora
      }
    }
  `;
@Component({
  selector: 'app-new-venta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
  templateUrl: './new-venta.component.html',
  styleUrl: './new-venta.component.scss'
})
export class NewVentaComponent {
  form!: FormGroup;
  submitted = false;
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
      apellido: ['', [Validators.required]],
      nit: [''],
      celular: ['', [Validators.required]],            
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
    const { nombre, apellido, nit, celular } = this.form.value;
    this.apollo.mutate({ 
      mutation: createVenta,
      variables: { nombre, apellido, nit, celular }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/users/clientes']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/users/clientes']);
  }
}
