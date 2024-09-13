import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const authToken: string = localStorage.getItem('authToken')!;
    const newReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + authToken),
    });
    return next(newReq);
  }