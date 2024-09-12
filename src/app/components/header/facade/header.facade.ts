import { Injectable } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication/authentication.service";
import { AuthenticationRequest } from "../../../services";

@Injectable({
    providedIn: 'root'
})
export class HeaderFacade {
    constructor(private auth: AuthenticationService) { }

    GetToken(username: string) {
        var request: AuthenticationRequest = { UserName: username };
        return this.auth.Login(request);
    }
}