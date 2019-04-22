import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = ""
  buttonPress: boolean = false;

  constructor(public fb: FormBuilder, private router: Router, private apiService: ApiService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      re_password: ['', [Validators.required]]
    }, {
        validator: this.checkIfMatching("password", "re_password")
      })
  }

  ngOnInit() {
  }

  checkIfMatching(passwordkey: string, re_passwordkey: string) {
    return (group: FormGroup) => {
      let pass = group.controls[passwordkey];
      let confpass = group.controls[re_passwordkey];
      if (pass.value == confpass.value) {
        return;
      } else {
        confpass.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }
  onSubmit() {  
    this.apiService.createUser(this.myForm.value)
      .subscribe(data => {
        this.buttonPress = true;
        this.message = "You've been Signed-Up Successfully.."
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 3000);
      });
  }
}
