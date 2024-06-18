import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { UserService } from '../../services/user.service';
import { NgClass, NgIf } from '@angular/common';
import { catchError, of, tap } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { CREATE_USUARIO } from 'src/app/core/constants/mutation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf, AngularSvgIconModule, ButtonComponent],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder, 
    private readonly router: Router,
    private apollo: Apollo
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      email: ['', [Validators.required], Validators.email],
      password: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.disabled = true;
    const { nombreUsuario, email, password, tipo } = this.form.value;       
    this.apollo.mutate({ 
      mutation: CREATE_USUARIO,
      variables: { nombreUsuario, email, password, tipo }
    }).subscribe(
      ( data: any ) => {
        if(data) {
          this.router.navigate(['/taller/users']);
        }        
      }
    );
  }

  cancelar(){
    this.router.navigate(['/taller/users']);
  }
}
