import { Component } from '@angular/core';
import { AuthServiceService, User } from '../services/auth-service.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data: User;
  // constructor(userData: AuthServiceService) {
  //   this.data = userData.login()
  // }

  title = 'Login'

  form: FormGroup = new FormGroup({
    empId1: new FormControl(''),
    empId2: new FormControl(''),
    empId3: new FormControl(''),
    empId4: new FormControl(''),
    pincode1: new FormControl(''),
    pincode2: new FormControl(''),
    pincode3: new FormControl(''),
    pincode4: new FormControl(''),
    pincode5: new FormControl(''),
    pincode6: new FormControl(''),
  });
  submitted = false;
  loginError = {
    error: false, msg:''
  };

  data: any;
  login: any;
  router: any;
  constructor(private formBuilder: FormBuilder, userData: AuthServiceService, loginRouter: Router, public dialog: MatDialog) {
    this.login = userData;
    this.router = loginRouter;
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  gotoNextField(nextElement: any) {
    console.log(nextElement);
    nextElement.focus();
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        empId1: ['', Validators.required],
        empId2: ['', Validators.required],
        empId3: ['', Validators.required],
        empId4: ['', Validators.required],
        pincode1: ['', Validators.required],
        pincode2: ['', Validators.required],
        pincode3: ['', Validators.required],
        pincode4: ['', Validators.required],
        pincode5: ['', Validators.required],
        pincode6: ['', Validators.required],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const formData = this.form.value;
    const empoloyeeId = `${formData.empId1}${formData.empId2}${formData.empId3}${formData.empId4}`;
    const pincode = `${formData.pincode1}${formData.pincode2}${formData.pincode3}${formData.pincode4}${formData.pincode5}${formData.pincode6}`;

    console.log(formData);

    this.login.login(empoloyeeId,pincode).subscribe((data: User) => {
      console.warn(data);
      this.data = data;
      if (this.data.length > 0) {
        localStorage.setItem("isLoggedin", "true");
        this.router.navigate(['dashboard/work-orders']);
      } else {

        this.loginError =  {
          error: true,
          msg: `<h2>Your Employee ID or PIN # is incorrect</h2>
            <p>Please contact your Supervisor or Human Resources.</p>`
        };
      }
    },
      (errormsg: any) => {
        // Handle the error within your component
        console.error(errormsg);
        this.loginError = {
          error: true,
          msg: `<h2>${errormsg}</h2>`
        };;
        //alert(errormsg);
        // Display an alert or take appropriate action in your component
      }
    )
  }

  closePopup() {
    this.loginError = {
      error: false,
      msg: ''
    };;
  }

}
