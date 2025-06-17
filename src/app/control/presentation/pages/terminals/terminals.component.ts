import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-terminals',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './terminals.component.html',
  styleUrl: './terminals.component.css'
})
export class TerminalsComponent {
  terminals = [
    { name: 'Terminal Callao', location: 'Callao', active: true },
    { name: 'Terminal Pisco', location: 'Pisco', active: true },
    { name: 'Terminal Lurín', location: 'Lima Sur', active: false }
  ];
}
