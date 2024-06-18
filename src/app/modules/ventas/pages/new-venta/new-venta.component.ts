import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_NOTA_VENTA } from 'src/app/core/constants/mutation';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NotaVenta } from '../../interfaces/venta.interface';

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
      fecha: ['', [Validators.required]],
      interes: ['', [Validators.required]],        
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
    const { fecha, interes } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_NOTA_VENTA,
      variables: { fecha, interes }
    }).subscribe(
      ( data: any ) => {
        if(data) {
          const notaVenta: NotaVenta = data.data.createNotaVenta;
          this.router.navigate(['/taller/ventas/show', notaVenta.id]);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/ventas']);
  }
}
