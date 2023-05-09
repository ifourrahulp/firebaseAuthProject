import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    PagesComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
  exports: [],
  providers: [AuthService],
})
export class PagesModule {}
