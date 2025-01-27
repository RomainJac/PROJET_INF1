import { Routes } from '@angular/router';
import { ItemSearchPageComponent } from './page/item-search-page/item-search-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'items', component: ItemSearchPageComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', redirectTo: '/items' }
];
