import {Routes} from '@angular/router';
import {ItemDetailsPageComponent} from "./page/item-details-page/item-details-page.component";
import {ItemSearchPageComponent} from './page/item-search-page/item-search-page.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {PrivacyPolicyPageComponent} from "./page/privacy-policy-page/privacy-policy-page.component";
import {TermsPageComponent} from "./page/terms-page/terms-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'items', component: ItemSearchPageComponent},
  {path: 'items/:id', component: ItemDetailsPageComponent},
  {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
  {path: 'terms', component: TermsPageComponent},
  {path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: '**', redirectTo: '/items'},


];
