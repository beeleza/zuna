import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { map, tap, catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.validateToken().pipe(
    tap(isValid => {
      if (!isValid) {
        router.navigate(['/login']);
      }
    }),
    map(isValid => isValid),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};
