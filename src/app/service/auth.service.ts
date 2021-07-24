import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from '../models/new-user';
import {Observable} from 'rxjs';
import {LoginUser} from '../models/login-user';
import {JwtDto} from '../models/jwt-dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.apiBaseUrl + '/auth/';

  constructor(private httpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}
