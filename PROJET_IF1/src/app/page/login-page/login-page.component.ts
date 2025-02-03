import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageTemplateComponent } from '../page-template/page-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  protected loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Gère la soumission du formulaire
   */
 protected onSubmit(): void {
    if (this.loginForm.valid) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/items']);
    }
  }

  /**
   * Vérifie si le champ 'email' est invalide et a été touché
   */
  get emailInvalid(): boolean {
    const emailControl = this.loginForm.controls['email'];
    return emailControl.invalid && !emailControl.untouched;
  }

  /**
   * Vérifie si le champ 'password' est invalide et a été touché
   */
  get passwordInvalid(): boolean {
    const passwordControl = this.loginForm.controls['password'];
    return passwordControl.invalid && !passwordControl.untouched;
  }

  /**
   * Retourne l'erreur pour le champ 'email'
   */
  get emailError(): string {
    const emailControl = this.loginForm.controls['email'];
    if (emailControl.hasError('required')) {
      return 'Email requis';
    } else if (emailControl.hasError('email')) {
      return 'Email invalide';
    }
    return '';
  }

  /**
   * Retourne l'erreur pour le champ 'password'
   */
  get passwordError(): string {
    const passwordControl = this.loginForm.controls['password'];
    if (passwordControl.hasError('required')) {
      return 'Mot de passe requis';
    } else if (passwordControl.hasError('minlength')) {
      return 'Mot de passe trop court (6 caractères minimum)';
    }
    return '';
  }
}
