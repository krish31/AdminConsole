import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordmatch: string;
  router: any;
  constructor(private fb: FormBuilder) { }
  signupForm: FormGroup;


  ngOnInit() {

    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      pwd: ['', [Validators.required,
      Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required, Validators.minLength(8)]],
      terms: ['', Validators.requiredTrue]
    }
    )

  }
 

  get email() { return this.signupForm.get('email'); }
  get pwd() { return this.signupForm.get('pwd'); }
  get confirmPwd() { return this.signupForm.get('confirmPwd'); }
  get terms() { return this.signupForm.get('terms'); }
  get firstname() { return this.signupForm.get('firstname'); }
  get lastname() { return this.signupForm.get('lastname'); }

  public onFormSubmit(model) {
    console.log(model);
    /* Any API call logic via services goes here */
    /* this.registerService.saveUserDetails(model).subscribe(result => {
      if (result.success) {
        alert(result.message);
        this.router.navigate(['login']);
      } else {
        alert(result.error);
      }
    }, err => { console.log(err) }); */
  }
}