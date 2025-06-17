import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflows.component.html',
  styleUrl: './workflows.component.css'
})
export class WorkflowsComponent {
  steps = [
    { title: 'Order Creation', description: 'Client places a new fuel order through the dashboard.' },
    { title: 'Payment Verification', description: 'Finance team verifies bank transfer or deposit details.' },
    { title: 'Dispatch Coordination', description: 'Order is assigned to terminal and delivery team.' },
    { title: 'Delivery Confirmation', description: 'Fuel is delivered and client signs confirmation.' },
    { title: 'Report Generation', description: 'System logs the delivery and generates activity reports.' }
  ];
}
