import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders-management',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    RouterModule,
  ],
  templateUrl: './orders-management.component.html',
  styleUrl: './orders-management.component.css',
})
export class OrdersManagementComponent {
  constructor(private router: Router) {}

  displayedColumns: string[] = [
    'expand',
    'created',
    'user',
    'amount',
    'terminal',
    'id',
  ];
  navItems = [
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin' },
    {
      label: 'Orders Management',
      icon: 'inventory_2',
      route: '/orders-management',
    },
    { label: 'Conciliations', icon: 'local_shipping', route: '/conciliations' },
    { label: 'Dispatch', icon: 'local_shipping', route: '/dispatch' },
    { label: 'Analytics', icon: 'analytics', route: '/analytics' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Prices', icon: 'attach_money', route: '/prices' },
    { label: 'Clients', icon: 'people', route: '/clients' },
    { label: 'Contact us', icon: 'mail', route: '/contact' },
  ];
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  expandedElement: any | null = null;
  isExpandedRow(index: number, row: any): boolean {
    return this.expandedElement === row;
  }
  toggleRow(row: any) {
    this.expandedElement = this.expandedElement?.id === row.id ? null : row;
  }
  orders = [
    {
      created: '4 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Callao',
      id: 'O_d1hfg...',
      status: 'Requested',
    },
    {
      created: '4 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d2hfg...',
      status: 'Approved',
    },
    {
      created: '12 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Valero',
      id: 'O_d3hfg...',
      status: 'Released',
    },
    {
      created: '12 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Valero',
      id: 'O_d4hfg...',
      status: 'Approved',
    },
    {
      created: '18 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d5hfg...',
      status: 'Requested',
    },
    {
      created: '18 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d6hfg...',
      status: 'Released',
    },
    {
      created: '22 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d7hfg...',
      status: 'Approved',
    },
    {
      created: '23 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d8hfg...',
      status: 'Closed',
    },
    {
      created: '28 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d9hfg...',
      status: 'Approved',
    },
    {
      created: '28 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Lurin',
      id: 'O_d10hfg...',
      status: 'Closed',
    },
    {
      created: '30 APR, 2025',
      user: 'Sebastian Rosas',
      amount: 'S/ 4000.00',
      terminal: 'Pisco',
      id: 'O_d11hfg...',
      status: 'Closed',
    },
  ];
}
