import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:3000/login"

  constructor(private httpClient: HttpClient) {}
  
  login(user:User): Observable<any>{
      return this.httpClient.post(this.url, JSON.stringify(user), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'response'
      })
    }
   }
