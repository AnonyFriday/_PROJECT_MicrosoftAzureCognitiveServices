import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const cvInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers
      .set('Content-Type', 'application/json')
      .set('Ocp-Apim-Subscription-Key', environment.key1),
  });

  return next(modifiedReq);
};
