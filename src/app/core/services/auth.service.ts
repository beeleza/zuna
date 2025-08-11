import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiURL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(loginRequest: LoginRequest): Observable<{ access_token: string }> {
    return this.http
      .post<{ access_token: string }>(`${this.apiURL}/auth/login`, loginRequest)
      .pipe(
        tap((res) => localStorage.setItem('access_token', res.access_token))
      );
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  validateToken(): Observable<boolean> {
    const token = this.getToken();

    if(!token) {
        return new Observable((observer) => {
        observer.next(false);
        observer.complete();
      });
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<boolean>(`${this.apiURL}/auth/validate-token`, { headers });
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['login'])
  }
}
