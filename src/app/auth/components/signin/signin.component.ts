import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private authservice: AuthService,
    private router: Router) { }

  signinform!: FormGroup;
  error!: boolean;

  ngOnInit() {
    this.signinform = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  Onsubmit() {
    if (this.signinform.valid) {
      this.authservice.signIn(this.signinform.value).subscribe((response: any) => {
        if (response && response['user']) {
          this.router.navigate(['/app/home']);
        }
      }, (err) => {
        if (err.error && err.error.error)
          this.error = true;
      })
    }
  }
}
