import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service'; // Make sure to adjust the path according to your project structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  constructor(private router: Router) {}
  // // Define the form fields
  //  username: string = ''; // Initialize form fields with empty values
  //  password: string = '';

  //  constructor(private authService: AuthService, private http: HttpClient) { }

  //  onSubmit(): void {
  //    // Handle the form submission
  //    this.authService.login(this.username, this.password).subscribe(
  //      (response) => {
  //        // Handle successful login response
  //        console.log('Login successful:', response);
  //        // Add additional logic here (e.g., navigation, storing user data, etc.)
  //      },
  //      (error) => {
  //        // Handle login error
  //        console.error('Login error:', error);
  //      }
  //    );
  //  }

  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  goToRegister() {
    this.router.navigate(['/', 'register']);
}
}
