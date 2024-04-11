import { Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent}
];
