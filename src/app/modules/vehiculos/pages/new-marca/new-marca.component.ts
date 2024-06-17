import { Component } from '@angular/core';
import { CREATE_MARCA } from '../../../../core/constants/mutation';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-new-marca',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
  templateUrl: './new-marca.component.html',
  styleUrl: './new-marca.component.scss'
})
export class NewMarcaComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]       
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
    const { nombre, porcentaje } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_MARCA,
      variables: { nombre, porcentaje }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/vehiculos/marcas']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/vehiculos/marcas']);
  }
}
