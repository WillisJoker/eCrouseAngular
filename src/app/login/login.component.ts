import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login({ name: this.name, password: this.password }).subscribe(
      (response: any) => {
        this.loginMessage = 'Login successful';
        console.log('Login successful');
        console.log('JWT:', response.jwt);
      },
      error => {
        this.loginMessage = 'Login failed. Please check your username and password.';
        console.error('Error logging in', error);
      }
    );
  }
}
