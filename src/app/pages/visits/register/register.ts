
import { Component, signal } from '@angular/core';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginRequest } from '../../../core/loginRequest';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Header} from '../../../shared/componentes/header/header';
import { Footer } from '../../../shared/componentes/footer/footer';

@Component({
  selector: 'app-register',
  imports: [Footer, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,CommonModule,
    FormsModule,ReactiveFormsModule,Header],
  templateUrl: './register.html',
  styleUrl: './register.css',
 
})
export class Register {
  
  hide = signal(true);
  loginForm: FormGroup;
  showData = false;
  loginData: loginRequest = new loginRequest();

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginData = this.loginForm.value;
      this.showData = true;
      console.log('Datos ingresados:', this.loginData);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}


