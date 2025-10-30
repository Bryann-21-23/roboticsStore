
import { Component, signal } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginRequest } from '../../../core/loginRequest';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Header} from '../../../shared/componentes/header/header';
import { Footer } from '../../../shared/componentes/footer/footer';
import { datosUser } from '../../../core/datosUser';
import { Router } from '@angular/router';
import { HomeUsers } from '../../users/home-users/home-users';

@Component({
  selector: 'app-login',
  imports: [Footer, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,CommonModule,
    FormsModule,ReactiveFormsModule,Header],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  hide = signal(true);
  loginForm: FormGroup;
  showData = false;
  mensajeError = '';
  usuarioEncontrado?: loginRequest;

  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { user, password } = this.loginForm.value;

      const usuario = datosUser.find(
        (u) => u.user === user && u.password === password
      );

      if (usuario) {
        this.usuarioEncontrado = usuario;
        this.mensajeError = '';
        this.showData = true;
        this.router.navigate(['/homeUsers']);
        
      } else {
        this.usuarioEncontrado = undefined;
        this.mensajeError = '❌ Usuario o contraseña incorrectos';
        this.showData = false;
      
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}