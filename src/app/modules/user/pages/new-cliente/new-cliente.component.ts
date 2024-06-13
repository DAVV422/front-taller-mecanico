import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_CLIENTE } from 'src/app/core/constants/mutation';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-cliente',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
  templateUrl: './new-cliente.component.html',
  styleUrl: './new-cliente.component.scss'
})
export class NewClienteComponent {
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
      mutation: CREATE_CLIENTE,
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
