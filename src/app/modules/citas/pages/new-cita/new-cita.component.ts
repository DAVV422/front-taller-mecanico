import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { CREATE_CITA } from 'src/app/core/constants/mutation';
import { ALL_USUARIOS, GET_ALL_PERSONAL } from 'src/app/core/constants/query';
import { Personal, User } from 'src/app/modules/user/interfaces/user.interface';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-new-cita',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent, NgFor],

  templateUrl: './new-cita.component.html',
  styleUrl: './new-cita.component.scss'
})
export class NewCitaComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  public usuarios: User[] = []
  public personal: Personal[] = []

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly apollo: Apollo
  ) {
    this.apollo.watchQuery({
      query: ALL_USUARIOS
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.allUsuarios != null){
        this.usuarios = result.data.allUsuarios;  
      }
    }); 
    this.apollo.watchQuery({
      query: GET_ALL_PERSONAL,
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getAllPersonal != null){
        this.personal = result.data.getAllPersonal;  
      }
    });
  }

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      usuarioId: ['', [Validators.required]],
      personalId: ['', [Validators.required]],
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
    const { fecha, hora, estado, usuarioId, personalId } = this.form.value;
    this.apollo.mutate({ 
      mutation: CREATE_CITA,
      variables: { fecha, hora, estado, usuarioId, personalId }
    }).subscribe(
      ({data}) => {
        if(data) {
          this.router.navigate(['/taller/citas']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/citas']);
  }
}
