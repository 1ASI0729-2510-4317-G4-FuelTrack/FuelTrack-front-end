import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatTableModule
  ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {
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

  displayedColumns: string[] = ['product', 'terminal', 'price'];
  dataSource = [
    { product: 'Diesel', terminal: 'Callao', price: 'S/ 12.50' },
    { product: 'Gasohol 90', terminal: 'Pisco', price: 'S/ 13.10' },
    { product: 'Gasohol 95', terminal: 'Lurín', price: 'S/ 13.60' },
  ];
}
