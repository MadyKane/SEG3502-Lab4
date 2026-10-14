import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  private builder: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);

  userForm = this.builder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.pattern('^[1-9]\\d{2}[1-9]\\d{6}$')]],
    email: ['', [Validators.required, Validators.email]]
  });

  get firstName(): AbstractControl {
    return this.userForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.userForm.get('lastName')!;
  }

  get phone(): AbstractControl {
    return this.userForm.get('phone')!;
  }

  get email(): AbstractControl {
    return this.userForm.get('email')!;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user = new User(
      this.userForm.value.firstName ?? '',
      this.userForm.value.lastName ?? '',
      this.userForm.value.phone ?? '',
      this.userForm.value.email ?? ''
    );

    this.userService.addUser(user);
    this.router.navigate(['/user-table']).then(() => {});
  }
}
