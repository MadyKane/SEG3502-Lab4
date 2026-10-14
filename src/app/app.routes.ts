import { Routes } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { UserTable } from './user-table/user-table';

export const routes: Routes = [
  { path: 'user-form', component: UserForm },
  { path: 'user-table', component: UserTable },
  { path: '', redirectTo: 'user-form', pathMatch: 'full' },
  { path: '**', component: UserForm }
];
