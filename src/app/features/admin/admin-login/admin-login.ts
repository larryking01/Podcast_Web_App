import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { AdminAuth } from '../../../core/services/AdminAuth.service';
import { AdminCredentials } from '../../../core/models/adminCredentials.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  standalone: true, 
  imports: [Navbar, Footer, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss'
})
export class AdminLogin {
  loginForm!: FormGroup;
  hidePassword = true; 
  correctCredentials = false;
  logginInProgress = false; 


  constructor(private fb: FormBuilder, private adminAuth: AdminAuth, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false] 
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials: AdminCredentials = this.loginForm.value;
      this.logginInProgress = true; 

      this.adminAuth.login(credentials).subscribe(
        response => {

          //successful login response handling
          localStorage.setItem('token', response.data.token); // Store token in localStorage
          localStorage.setItem('currentUser', JSON.stringify(response.data.user)); //user data

          this.router.navigate(['/admin/dashboard']);
        },
        error => {
          // error login
         this.correctCredentials = true
         this.logginInProgress = false;
        }
      );
    } else {
     
      this.loginForm.markAllAsTouched(); 
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
