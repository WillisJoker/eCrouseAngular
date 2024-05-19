import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/login';
  private registerUrl = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: LoginUser): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(user: RegisterUser): Observable<any> {
    console.log(user);
    return this.http.post(this.registerUrl, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  auth: string[];
}

interface LoginUser {
  name: string;
  password: string;
}
