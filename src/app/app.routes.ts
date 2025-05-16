import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { OrdersManagementComponent } from './pages/orders-management/orders-management.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
    ],
  },
  { path: 'orders-management', component: OrdersManagementComponent },
];
