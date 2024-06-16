import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_VEHICULO } from 'src/app/core/constants/mutation';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Marca } from '../../interfaces/vehiculos.interface';
import { GET_ALL_MARCAS } from 'src/app/core/constants/query';

@Component({
  selector: 'app-new-vehiculo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],
  templateUrl: './new-vehiculo.component.html',
  styleUrl: './new-vehiculo.component.scss'
})
export class NewVehiculoComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  public marcas: Marca[] = []

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_ALL_MARCAS
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllMarcas != null){
        this.marcas = result.data.getAllMarcas;  
      }
    }); 
    this.form = this._formBuilder.group({
      matricula: ['', [Validators.required]],
      color: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      marcaId: ['', [Validators.required]]          
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
    const { matricula, color, descripcion, modelo, marcaId } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_VEHICULO,
      variables: { matricula, color, descripcion, modelo, marcaId }
    }).subscribe(
      ({data}) => {
        if( data ) {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/taller/vehiculos']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/vehiculos']);
  }
}
