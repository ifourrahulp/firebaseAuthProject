import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  googleAuth() {
    this.authService.googleAuth();
  }

  signUp(email: any, password: any) {
    this.authService.signUp(email, password);
  }
}
