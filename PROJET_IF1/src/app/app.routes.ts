import { Routes } from '@angular/router';
import { ItemSearchPageComponent } from './page/item-search-page/item-search-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import {ItemDetailsPageComponent} from "./page/item-details-page/item-details-page.component";

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'items', component: ItemSearchPageComponent },
  { path: 'items/:id', component: ItemDetailsPageComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', redirectTo: '/items' }
];
