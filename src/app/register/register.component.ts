import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'

})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm;
  phone: string;
  fullName: string;
  address: string;
  email: string;
  password: string;
  retypePassword: string;
  isAccepted: boolean;
  dateOfBirth: Date;

  constructor(private router: Router, private userService: UserService) {
    this.phone = '';
    this.fullName = '';
    this.address = '';
    this.email = '';
    this.password = '';
    this.retypePassword = '';
    this.isAccepted = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);

  }


  onPhoneChange() {
    console.log("phone: ", this.phone);
  }
  onRegister() {
    const message = 'phone: ' + this.phone +
      'fullName: ' + this.fullName +
      'address: ' + this.address +
      'email: ' + this.email +
      'password: ' + this.password +
      'retypePassword: ' + this.retypePassword +
      'isAccepted: ' + this.isAccepted +
      'dateOfBirth: ' + this.dateOfBirth;
    alert(message + '\n' + "Đăng ký thành công");

    debugger

    const registerData: any = {
      "fullName": this.fullName,
      "phone_number": this.phone,
      "address": this.address,
      "password": this.password,
      "retype_password": this.retypePassword,
      "date_of_birth": this.dateOfBirth,
      "facebook_account_id": 0,
      "google_account_id": 0,
      "role": 2,
    }
    this.userService.register(registerData).subscribe({
      next: (response: any) => {
        debugger
        this.router.navigate(['/login']);
      },
      complete: () => {
        debugger
      },
      error: (error: any) => {
        alert('có lỗi xảy ra: ' + error.error.message);
      }
    })





  }
  onDateOfBirthChange() {
    console.log("dateOfBirth: ", this.dateOfBirth);
  }
  passwordMatch() {
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls['retypePassword'].setErrors({ 'passwordMismatch': true });
    } else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
    console.log("passwordMatch: ", this.registerForm.form.controls['retypePassword'].errors);
  }
  checkAge() {
    if (this.dateOfBirth) {
      const currentDate = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = currentDate.getMonth() - birthDate.getMonth();
      if (age < 18 || monthDiff == 0 && currentDate.getDate() < birthDate.getDate()) {
        age--;
      }
      if (age < 18) {
        this.registerForm.form.controls['dateOfBirth'].setErrors({ 'age': true });
      } else {
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
  }
}

