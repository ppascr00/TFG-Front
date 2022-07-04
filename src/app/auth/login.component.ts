import { Component, OnInit } from '@angular/core';
import {TokenService} from '../service/token.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {LoginUser} from '../models/login-user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  userName: string;
  password: string;
  roles: string[] = [];
  errMsg: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
      this.loginUser = new LoginUser(this.userName, this.password);
      this.authService.login(this.loginUser).subscribe(
        data => {
          this.isLogged = true;

          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.userName);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.toastr.success('Bienvenido ' + data.userName, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          this.isLogged = false;
          this.errMsg = err.error.message;
          this.toastr.error(this.errMsg, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        }
      );
  }

}
