import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  selectedAuth: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    const requestBody = {
      name: this.name,
      email: this.email,
      password: this.password,
      auth: [this.selectedAuth]
    };

    this.authService.register(requestBody).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering', error);
      }
    );
  }
}
