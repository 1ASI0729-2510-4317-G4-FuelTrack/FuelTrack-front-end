import { Routes } from '@angular/router';
import { HomeComponent } from './shared/presentation/pages/home/home.component';
import { LoginComponent } from './auth-pages/presentation/pages/login/login.component';
import { RegisterComponent } from './auth-pages/presentation/pages/register/register.component';
import { OrdersComponent } from './control/presentation/pages/orders/orders.component';
import { AnalyticsComponent } from './analytics/presentation/pages/analytics/analytics.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { OrdersManagementComponent } from './analytics/presentation/pages/orders-management/orders-management.component';

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
