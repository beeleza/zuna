import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Layout } from './layout/layout';
import { authGuard } from './core/guard/auth.guard';
import { Dashboard } from './features/dashboard/dashboard';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: Layout,
    canActivate: [authGuard],
    children: [
        { path: '', component: Dashboard },
        { path: 'transactions', loadChildren: () => import('./features/transactions/transactions.routes') },
        { path: 'categories', loadChildren: () => import('./features/categories/categories.routes') },
        { path: 'reminders', loadChildren: () => import('./features/reminders/reminders.routes') }
    ],
  },
];
