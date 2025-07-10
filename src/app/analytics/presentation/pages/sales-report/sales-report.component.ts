import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-report',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatListModule, RouterModule, BaseChartDirective],
  templateUrl: './sales-report.component.html',
  styleUrl: './sales-report.component.css'
})
export class SalesReportComponent {
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

  public barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Monthly Sales (USD)' }
    }
  };
  public barChartData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      { data: [12000, 15000, 18000, 14000, 20000, 22000, 21000, 19000, 23000, 25000, 24000, 26000], label: 'Sales' }
    ]
  };
}
