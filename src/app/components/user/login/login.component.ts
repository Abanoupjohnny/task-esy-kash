import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
      )
      setInterval(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    // console.log(form.value);
    // form.reset()
  }
}
