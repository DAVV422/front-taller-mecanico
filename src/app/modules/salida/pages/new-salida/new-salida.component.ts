import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo, gql } from 'apollo-angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
const createSalida = gql`
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
  selector: 'app-new-salida',
  standalone: true,
  imports: [FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    NgClass, NgIf, 
    AngularSvgIconModule, 
    ButtonComponent],
  templateUrl: './new-salida.component.html',
  styleUrl: './new-salida.component.scss'
})
export class NewSalidaComponent {
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
      fecha: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      hora: ['', [Validators.required]],   
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
    const { fecha,motivo,hora} = this.form.value;
    this.apollo.mutate({ 
      mutation: createSalida,
      variables: {fecha,motivo,hora}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/salida']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/salida']);
  }

}
