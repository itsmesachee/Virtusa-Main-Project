import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request, next) {
    let token = window.sessionStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}
