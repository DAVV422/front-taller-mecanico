import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { UserService } from '../../services/user.service';
import { NgClass, NgIf } from '@angular/common';
import { catchError, of, tap } from 'rxjs';

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
    private userService: UserService,
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cellphone: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      password: ['', Validators.required],
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
    const { email, password, name, lastName, cellphone, birthdate, grade } = this.form.value;
    
    this.userService.create({ email, last_name:lastName, name, birthdate, grade, cellphone, password, role: 'basic' })
      .pipe(
        tap(resp => console.log(resp)),
        // tap(resp => localStorage.setItem('token', resp.data.accessToken)),
        // tap(resp => localStorage.setItem('user', JSON.stringify(resp.data.User))),
        catchError(err => of(
          // this.showSnackbar('Usuario o Contraseña Incorrecta', 'Cerrar')
        )),
        tap(() => this.disabled = false),
      ).subscribe( (resp:any) => {
        if (resp) {
          this.router.navigate(['/taller/users']);
          // this.showSnackbar('Sesión iniciada correctamente', 'Cerrar');
        }
      });
  }
}
