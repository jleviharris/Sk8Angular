import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7255/api/Auth'; // Replace with your API base URL
  private tokenKey = 'authToken'; // Key to store the token in local storage
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const storedToken = this.getToken();
    const initialUser = storedToken ? this.decodeToken(storedToken) : null;
    this.currentUserSubject = new BehaviorSubject<any>(initialUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  register(username: string, password: string, email: string): Observable<any> {
    const payload = { username, password, email };
    return this.http.post<any>(`${this.baseUrl}/register`, payload)
      .pipe(
        catchError(error => {
          // Handle registration error here
          console.error('Registration error:', error);
          return throwError(error);
        })
      );
  }

  login(username: string, password: string): Observable<any> {
    const payload = { username, password };
    return this.http.post<any>(`${this.baseUrl}/login`, payload)
      .pipe(
        tap(response => {
          if (response.success) {
            localStorage.setItem(this.tokenKey, response.token);
            const decodedToken = this.decodeToken(response.token);
            this.currentUserSubject.next(decodedToken);
          }
        }),
        catchError(error => {
          // Handle login error here
          console.error('Login error:', error);
          return throwError(error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  decodeToken(token: string): any {
    // Use jwt-decode to decode the token
    return jwtDecode(token);
  }
}
