import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const navigationGuard: CanActivateFn = (route, state) => {
  if (inject(Router).navigated) {
    return true
  } else {
    inject(Router).navigate(['/']).then(() => {inject(Router).navigate(['/'])})
    return false
  };
};
