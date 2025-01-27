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
  isLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  handleAuth(): void {
    if (this.isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
