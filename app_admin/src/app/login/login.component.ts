import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  public isLoading: boolean = false;

  credentials = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required';
      return;
    }

    this.isLoading = true;

    const user = {
      email: this.credentials.email
    } as User;

    // Call the login method
    this.authenticationService.login(user, this.credentials.password);

    // Poll for login status (simulate API response)
    setTimeout(() => {
      this.isLoading = false;

      if (this.authenticationService.isLoggedIn()) {
        this.router.navigate(['/trips']); // or '' if trips is default
      } else {
        this.formError = 'Login failed. Please check your credentials.';
      }
    }, 1500);
  }
}