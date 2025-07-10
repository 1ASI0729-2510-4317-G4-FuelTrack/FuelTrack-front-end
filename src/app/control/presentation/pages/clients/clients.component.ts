import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

  downloadClientsPDF() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Resumen de Clientes', 14, 18);
    doc.setFontSize(10);
    doc.text('Fecha: ' + new Date().toLocaleString(), 14, 25);
    (doc as any).autoTable({
      head: [['Nombre', 'RUC', 'Estado']],
      body: this.clients.map(c => [c.name, c.ruc, c.status]),
      startY: 30,
      theme: 'grid',
      headStyles: { fillColor: [34, 49, 75] },
      styles: { fontSize: 10 }
    });
    doc.save('resumen-clientes.pdf');
  }
}
