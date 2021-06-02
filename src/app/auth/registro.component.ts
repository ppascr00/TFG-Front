import { Component, OnInit } from '@angular/core';
import {TokenService} from '../service/token.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {LoginUser} from '../models/login-user';
import {NewUser} from '../models/new-user';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isLogged = false;
  newUser: NewUser;
  userName: string;
  email: string;
  password: string;
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
    }
  }

  onRegister(): void{
    this.newUser = new NewUser(this.userName, this.email, this.password);
    this.authService.newUser(this.newUser).subscribe(
        data => {
          this.toastr.success('Cuenta creada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });

          this.router.navigate(['/login']);
        },
        err => {
          this.errMsg = err.error.mensaje;
          this.toastr.error(this.errMsg, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });

          // console.log(err.error.message);
        }
    );
  }

}
