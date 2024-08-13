import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith("login")) {
      const userLoginParams = request.body;
      const credentials = `${userLoginParams.username}:${userLoginParams.password}`;
      const encodedCredentials = btoa(credentials);

      return next.handle(request.clone({
        headers: request.headers.append('Authorization', `Basic ${encodedCredentials}`)
      })
      );
    }
    return next.handle(request);
  }
}
