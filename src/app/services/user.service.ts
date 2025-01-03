import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'http://localhost:8088/api/v1';

    constructor(private http: HttpClient) { }

    register(registerData: any): Observable<any> {
        return this.http.post(this.apiUrl + '/users/register', registerData);
    }
}