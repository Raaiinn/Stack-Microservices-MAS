import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  loadAllbooks(){
    return this.http.get<any>("http://localhost:8082/api/books/findall");
  }

  loadBooksByAuthor(author : number){
    const params = new HttpParams()
      .set('author', author)
    return this.http.get<any>("http://localhost:8082/api/books/find?"+ params);
  }

  publishBook(id : number, title : string, launch: string, pages : number, author : number, cover : string){
    const body = JSON.stringify({})
    const params = new HttpParams()
      .set('id', id)
      .set('title',title)
      .set('launch',launch)
      .set('pages', pages)
      .set('author', author)
      .set('cover', cover)

    return this.http.post<any>("http://localhost:8082/api/books/create", body, {params : params});

  }
}
