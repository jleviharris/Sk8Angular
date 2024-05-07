import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    //private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    // Fetch the current user from the authentication service
  //  this.authService.getCurrentUser().subscribe((user) => {
   //   this.user = user;
  //  });
  }

  editProfile() {
    // Navigate to the edit profile page
    this.router.navigate(['/edit-profile']);
  }
}
