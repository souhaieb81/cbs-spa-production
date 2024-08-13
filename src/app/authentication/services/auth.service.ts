import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { User } from '../models/user';
import { ConfigService } from '../../services/config.service';

const AUTH_API = 'http://localhost:8080/api/auth/';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  login(userLogin: UserLogin): Observable<any> {console.log("URLS -------------------------" + this.configService.getConfig().API.URL.AUTHENTICATION);
    return this.http
      .post(
        this.configService.getConfig().API.URL.AUTHENTICATION + 'login',
        {
          username: userLogin.username,
          password: userLogin.password,
        },
      )
      
  }

  register(user: User): Observable<any> {
    return this.http.post(AUTH_API + 'register', user);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {});
  }
}
