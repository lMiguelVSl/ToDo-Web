import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Endpoints } from '../constants/endpoints';
import { environment } from "../../../environment";
import { AuthenticationRequest } from "..";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    Login(request: AuthenticationRequest) {
        return this.http.post<string>(`${environment.baseUrl}${Endpoints.Authentication.login.path()}`, request, { responseType: 'text' as 'json' }); 
    }
}