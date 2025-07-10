import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  constructor(public router: Router) {}

  navItems = [
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin' },
    { label: 'Orders Management', icon: 'inventory_2', route: '/orders-management' },
    { label: 'Conciliations', icon: 'local_shipping', route: '/conciliations' },
    { label: 'Dispatch', icon: 'local_shipping', route: '/dispatch' },
    { label: 'Sales Report', icon: 'bar_chart', route: '/sales-report' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Prices', icon: 'attach_money', route: '/prices' },
    { label: 'Clients', icon: 'people', route: '/clients' },
    { label: 'Contact us', icon: 'mail', route: '/contact' },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  clients = [
    { name: 'Transportes Perú', ruc: '20123456789', status: 'Active' },
    { name: 'Combustibles Rojas', ruc: '20456789123', status: 'Inactive' },
    { name: 'Gasolinera Lima Sur', ruc: '20876543210', status: 'Active' },
  ];
}
