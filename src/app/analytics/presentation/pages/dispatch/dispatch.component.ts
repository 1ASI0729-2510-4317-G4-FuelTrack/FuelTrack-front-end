import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { Router, RouterModule } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-dispatch',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    RouterModule,
  ],
  templateUrl: './dispatch.component.html',
  styleUrl: './dispatch.component.css',
})
export class DispatchComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'created',
    'user',
    'amount',
    'terminal',
    'release',
    'id',
  ];

  orders: any[] = [];
  selection = new SelectionModel<any>(true, []);
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

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log('Órdenes recibidas (Dispatch):', data);
      },
      error: (err) => {
        console.error('Error al obtener órdenes en Dispatch:', err);
      }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.orders.length;
  }

  toggleAll(event: { checked: boolean }): void {
    event.checked
      ? this.selection.select(...this.orders)
      : this.selection.clear();
  }

  toggleOne(row: any): void {
    this.selection.toggle(row);
  }
}
