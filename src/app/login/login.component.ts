import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../sharData/auth.service';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}/)]),
  })
  constructor(private _authService: AuthService, private _router: Router,
    private _toastrService: ToastrService, private _ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login(loginForm: FormGroup) {
    this._ngxSpinnerService.show();
    this.isLoading = true;
    this._authService.login(loginForm.value).subscribe({

      next: (e) => {
        this._ngxSpinnerService.hide();
        this.isLoading = false;
        if (e.message == "success") {
          this._toastrService.success('welcome', 'Success login')
          localStorage.setItem('token', e.token);
          this._authService.getUserData();

          this._router.navigate(['home'])

        } else {
          e.message
          this._toastrService.error('login failed', 'pls try again')
        }
      },
      error: (e) => {
        this._ngxSpinnerService.hide();
        this.isLoading = false; console.log(e);
        this._toastrService.error('login failed', e.error.message)
      }

    })
  }

}
