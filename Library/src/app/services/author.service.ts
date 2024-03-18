import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private author = new BehaviorSubject(0);
  getAuthor = this.author.asObservable();

  constructor(private http : HttpClient) {
  }

  loadAuthor(){
    return this.http.get<any>("http://localhost:8081/api/authors/findall");
  }

  signUp(id : number, name : string, lastname : string, date: string, email : string, password : string){
    const body = JSON.stringify({})
    const params = new HttpParams()
      .set('id', id)
      .set('name',name)
      .set('lastname',lastname)
      .set('born', date)
      .set('email', email)
      .set('password', password)
    return this.http.post<any>("http://localhost:8081/api/authors/signup", body, {params : params});
  }

  loadAuthorById(id : number){
    const params = new HttpParams()
      .set('id', id)
    return this.http.get<any>("http://localhost:8081/api/authors/find?"+params);
  }

  passMessage(id : number){
      this.author.next(id);
  }
}
