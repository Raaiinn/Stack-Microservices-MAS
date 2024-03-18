import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(email : string, password : string){

    const body = JSON.stringify({})
    const params = new HttpParams()
      .set('email', email)
      .set('password', password)

    return this.http.post<any>("http://localhost:8081/api/authors/login", body, {params : params});
  }
}
