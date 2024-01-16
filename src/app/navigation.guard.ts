import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const navigationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (router.navigated) {
    return true
  } else {
    router.navigate(['/']).then(() => {router.navigate(['/'])})
    return false
  };
};
