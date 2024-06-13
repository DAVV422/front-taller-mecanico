import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_SERVICIO } from 'src/app/core/constants/mutation';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-servicio',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
  templateUrl: './new-servicio.component.html',
  styleUrl: './new-servicio.component.scss'
})
export class NewServicioComponent {
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
      tipo: ['', [Validators.required]],
      tarifaBase: ['', [Validators.required]],            
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
    const { nombre, descripcion, tipo, tarifaBase } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_SERVICIO,
      variables: { nombre, descripcion, tipo, tarifaBase }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/servicios']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/servicios']);
  }
}
