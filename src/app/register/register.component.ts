import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../sharData/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoding: boolean = false;
  errorMessage: string = "";
  errorserverMessage: string = '';
  passwordsMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const rePassword = control.get('rePassword');
    return password && rePassword && password.value !== rePassword.value ? { 'mismatch': true } : null;
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}/)]),
  }, { validators: this.passwordsMatchValidator });

  constructor(private _authService: AuthService, private _router: Router, private _ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  register(value: object) {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fix the errors in the form';
      return;
    }

    this._ngxSpinnerService.show();
    this.isLoding = true;
    this._authService.signup(value).subscribe({
      next: (r) => {
        this._ngxSpinnerService.hide();
        this.isLoding = false;
        if (r.message === 'success') {
          this._router.navigate(['login']);
        } else {
          this.errorMessage = 'Please enter valid data';
        }
      },
      error: (e) => {
        this._ngxSpinnerService.hide();
        this.isLoding = false;
        console.log(e);
        this.errorMessage = 'Please try again ' + e.error.message;
      }
    });
  }

  // Custom Validator to check if passwords match

}
