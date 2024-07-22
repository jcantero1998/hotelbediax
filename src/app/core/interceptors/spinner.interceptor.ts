import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(SpinnerService);
  spinnerService.show();
  return next(req).pipe(
    //TODO: Remove delay (It has only added to show spinner because there is no real API)
    delay(700),
    finalize(() => spinnerService.hide())
  );
};
