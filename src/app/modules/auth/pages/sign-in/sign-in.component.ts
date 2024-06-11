import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  disabled: boolean = false;
  datos: any;

  constructor(
    private readonly _formBuilder: FormBuilder, 
    private readonly router: Router,    
    private authService: AuthService,
    private readonly apollo: Apollo
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         allUsuarios{
    //           id,
    //           email,
    //           password
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.datos = result.data?.allUsuarios;
    //     console.log(result.loading);
    //     console.log(result.error);
    //   });  
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.disabled = true;
    const { email, password } = this.form.value;    

    this.apollo
      .watchQuery({
        query: gql`
          query userLogin($email: String!, $password: String!) {
            login(email: $email, password: $password){
              id,
              email,
              nombreUsuario,
              tipo              
            }
          }
        `,
        variables:{
          email: email,
          password: password
        }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.login != null){
          localStorage.setItem('usuario', result.data.login.id);     
          this.router.navigate(['/sci'])     
        }
      });
    
    // this.authService.login(email, password)
    //   .pipe(        
    //     tap(resp => localStorage.setItem('token', resp.data.accessToken)),
    //     tap(resp => localStorage.setItem('user', JSON.stringify(resp.data.User))),
    //     catchError(err => of(
    //       // this.showSnackbar('Usuario o Contraseña Incorrecta', 'Cerrar')
    //     )),
    //     tap(() => this.disabled = false),
    //   ).subscribe( (resp:any) => {
    //     if (!!resp) {
    //       this.router.navigate(['/sci']);
    //       // this.showSnackbar('Sesión iniciada correctamente', 'Cerrar');
    //     }
    //   });
  }
}
