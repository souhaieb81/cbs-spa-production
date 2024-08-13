import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  register() {
    this.authService.register(this.user).subscribe({
      next: data => {
        console.log("Register OK");
      }
    })
  }
}
