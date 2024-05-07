import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private router: Router) {}

  // This method handles navigation to a specific route
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

    goToFriends() {
    this.router.navigate(['/', 'friends']);
  }
}
