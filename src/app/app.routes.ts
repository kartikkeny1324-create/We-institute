import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },              // Home page
  { path: 'about', component: AboutComponent } // About page
];