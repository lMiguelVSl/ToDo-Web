import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    private checkAuthStatus(): boolean | Observable<boolean> {
        let token = localStorage.getItem('authToken') ?? '';
        return this.authService.checkAuthentication(token)
            .pipe(
                tap(isAuthenticated => {
                    if (!isAuthenticated) this.router.navigate(['/NotAuthorized'])
                })
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('Can Activate');
        console.log({ route, state });

        return this.checkAuthStatus();
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('Can Match');
        console.log({ route, segments });

        return this.checkAuthStatus();
    }

}