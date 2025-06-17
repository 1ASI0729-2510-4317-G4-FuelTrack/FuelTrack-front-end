import { Routes } from '@angular/router';
import { HomeComponent } from './shared/presentation/pages/home/home.component';
import { LoginComponent } from './auth-pages/presentation/pages/login/login.component';
import { RegisterComponent } from './auth-pages/presentation/pages/register/register.component';
import { OrdersComponent } from './control/presentation/pages/orders/orders.component';
import { AnalyticsComponent } from './analytics/presentation/pages/analytics/analytics.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { OrdersManagementComponent } from './analytics/presentation/pages/orders-management/orders-management.component';
import { DispatchComponent } from './analytics/presentation/pages/dispatch/dispatch.component';
import {AdminComponent} from './control/presentation/pages/admin/admin.component';
import {TerminalsComponent} from './control/presentation/pages/terminals/terminals.component';
import {NotificationsComponent} from './control/presentation/pages/notifications/notifications.component';
import {ProvidersComponent} from './control/presentation/pages/providers/providers.component';
import {WorkflowsComponent} from './control/presentation/pages/workflows/workflows.component';
import {ContactUsComponent} from './control/presentation/pages/contact-us/contact-us.component';

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
      { path: 'admin', component: AdminComponent},
      { path: 'terminals', component: TerminalsComponent},
      { path: 'notifications', component: NotificationsComponent},
      { path: 'providers', component: ProvidersComponent},
      { path: 'workflows', component: WorkflowsComponent},
      { path: 'contact-us', component: ContactUsComponent},
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
    ],
  },
  { path: 'orders-management', component: OrdersManagementComponent },
  { path: 'dispatch', component: DispatchComponent },
];
