import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  invalidLogin: boolean = false;
  userError;

  constructor(public fb: FormBuilder, public router: Router, private apiService: ApiService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    
    $(document).ready(function () {
      $('a[href^="#"]').on('click', function (event) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000);
        }

      });
    });
  }

  onSubmit(myForm) {
    if (myForm.invalid) {
      return;
    }
    const loginPayload = {
      username: myForm.value.email,
      password: myForm.value.password
    };
    this.apiService.login(loginPayload).subscribe(data => {
      if (data.status === 200) {
        sessionStorage.setItem('token', data.result.token);
        this.message = "Logging in.."
        setTimeout(() => {
          this.message = "";
          this.router.navigate(['products']);
        }, 1000);
      }
    }, error => {
      this.userError = "Caution: Invalid Credentials!";
      this.invalidLogin = true;
      setTimeout(() => {
        this.userError = "";
        this.myForm.reset();
      }, 3000);
    });
  }

}
