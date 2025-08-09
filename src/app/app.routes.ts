import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: Layout,
    children: [
        { path: '', component: Dashboard },
        { path: 'transactions', loadChildren: () => import('./pages/transactions/transactions.routes') },
        { path: 'categories', loadChildren: () => import('./pages/categories/categories.routes') },
        { path: 'reminders', loadChildren: () => import('./pages/reminders/reminders.routes') }
    ],
  },
];
