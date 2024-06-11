import { Component } from '@angular/core';
import { SignUpComponent } from '../../../../modules/auth/pages/sign-up/sign-up.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ ButtonComponent, FormsModule, AngularSvgIconModule, RouterLink ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

}
