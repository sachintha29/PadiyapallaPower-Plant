import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  providers: [AuthService]
})
export class VerifyEmailComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
