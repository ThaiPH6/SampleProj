import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  passwordMinLength: number = 6;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    })
  }

  submitForm(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.registerUser({
        email: this.signupForm.controls['email'].value,
        password: this.signupForm.controls['password'].value,
      })
    } else {
      Object.values(this.signupForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
