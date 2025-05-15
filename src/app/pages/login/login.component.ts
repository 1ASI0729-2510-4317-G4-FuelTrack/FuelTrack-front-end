import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isClient = true;
  email = '';
  ruc = '';
  password = '';

  login() {
    if (this.isClient) {
      console.log(`[Client] Email:`, this.email);
    } else {
      console.log(`[Supplier] RUC:`, this.ruc);
    }
    console.log('Password:', this.password);
  }

  toggleLogin() {
    this.isClient = !this.isClient;
    this.email = '';
    this.ruc = '';
    this.password = '';
  }
}

