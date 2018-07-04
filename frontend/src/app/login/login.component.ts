import { Component} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../shared/auth/auth.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    isLoginError: boolean = false;
    loginFormAdd: FormGroup;


    constructor(private router: Router,
        private route: ActivatedRoute, private authService: AuthService) { }

    //For validation
    ngOnInit() {
        this.loginFormAdd = new FormGroup({
            'UserName': new FormControl(null, [Validators.required]), //,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
            'Password': new FormControl(null, [Validators.required])
        }, { updateOn: 'blur' });
    }

    // On submit button click    
    onSubmit(form: NgForm) {
        //get the value of form control
        this.authService.signinUser(form.value).subscribe(
            data => {
                if (data['success']==true) {
                    localStorage.setItem('token', data['access_token']);
                    localStorage.setItem('firstname', data['data'].firstname);
                    localStorage.setItem('lastname', data['data'].lastname);
                    localStorage.setItem('email', data['data'].email);
                    localStorage.setItem('id', data['data']._id);
                    localStorage.setItem('roleId', data['data'].roleID);

                    this.router.navigate(['dashboard'], { relativeTo: this.route.parent });
                    this.loginFormAdd.reset();
                } else {
                    this.isLoginError = true;
                }
            }, (err: HttpErrorResponse) => {
                this.isLoginError = true;

            }
        );
    }


    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
