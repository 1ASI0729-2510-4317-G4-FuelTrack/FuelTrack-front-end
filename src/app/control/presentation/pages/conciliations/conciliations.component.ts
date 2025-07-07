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
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-conciliations',
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
    MatCheckboxModule,
    RouterModule,
  ],
  templateUrl: './conciliations.component.html',
  styleUrl: './conciliations.component.css'
})
export class ConciliationsComponent {
  constructor(public router: Router) {}

  navItems = [
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin' },
    { label: 'Orders Management', icon: 'inventory_2', route: '/orders-management' },
    { label: 'Conciliations', icon: 'local_shipping', route: '/conciliations' },
    { label: 'Dispatch', icon: 'local_shipping', route: '/dispatch' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Prices', icon: 'attach_money', route: '/prices' },
    { label: 'Clients', icon: 'people', route: '/clients' },
    { label: 'Contact us', icon: 'mail', route: '/contact' },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  displayedColumns: string[] = ['select', 'order', 'date', 'status', 'action'];
  dataSource = [
    { order: 'ORD-0012', date: '4 APR, 2025', status: 'Pending' },
    { order: 'ORD-0013', date: '5 APR, 2025', status: 'With observations' },
    { order: 'ORD-0014', date: '6 APR, 2025', status: 'Conciliated' },
  ];
}
