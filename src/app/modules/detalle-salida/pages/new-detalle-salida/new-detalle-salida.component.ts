import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo,gql } from 'apollo-angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

const createDetalleSalida = gql`
      mutation createDetalleSalida(
        $cantidad:Float!, 
        $descripcion:String!, 	
      ) {
      createDetalleSalida(
        cantidad:$cantidad,
        descripcion:$descripcion,
      ){
        id,
        cantidad,
        descripcion
      }
    }
  `;
@Component({
  selector: 'app-new-detalle-salida',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    NgClass, NgIf, 
    AngularSvgIconModule, 
    ButtonComponent
  ],
  templateUrl: './new-detalle-salida.component.html',
  styleUrl: './new-detalle-salida.component.scss'
})
export class NewDetalleSalidaComponent {
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
      cantidad: ['', [Validators.required]],
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
    const { cantidad,descripcion} = this.form.value;
    this.apollo.mutate({ 
      mutation: createDetalleSalida,
      variables: {cantidad,descripcion}
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/detallesalida']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/detallesalida']);
  }
}
