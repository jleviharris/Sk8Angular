import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {
  }

  title = 'Sk8Angular';

  goToFriends() {
    this.router.navigate(['/', 'friends']);
  }
}
