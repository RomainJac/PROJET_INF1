import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private isLoggedIn: boolean = false;

  constructor(private router: Router) {
  }

  protected checkLoginStatus(): boolean {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return this.isLoggedIn;
  }

  protected handleAuth(): void {
    if (this.isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
