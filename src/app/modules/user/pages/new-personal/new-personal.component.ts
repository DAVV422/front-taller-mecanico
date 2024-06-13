import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo, gql } from 'apollo-angular';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

const createPersonal = gql`
      mutation createPersonal(
        $nombre:String!, 
        $apellido:String!, 
        $celular:String!,
        $direccion:String!,
        $ci:String!,
        $fechaNacimiento:String!,  	
      ) {
      createPersonal(
        nombre:$nombre,
        apellido:$apellido,
        celular:$celular,
        direccion:$direccion,
        ci:$ci,
        fechaNacimiento:$fechaNacimiento    
      ){
        id,
        nombre,
        apellido,
        ci,
        direccion,
        celular,
        fechaNacimiento,
        usuarioId
      }
    }
  `;
@Component({
  selector: 'app-new-personal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
  templateUrl: './new-personal.component.html',
  styleUrl: './new-personal.component.scss'
})
export class NewPersonalComponent {
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
      apellido: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],      
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
    const { nombre, apellido, ci, direccion, celular, fechaNacimiento } = this.form.value;
    this.apollo.mutate({ 
      mutation: createPersonal,
      variables: { nombre, apellido, ci, direccion, celular, fechaNacimiento}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/users/personal']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/users/personal']);
  }
}
