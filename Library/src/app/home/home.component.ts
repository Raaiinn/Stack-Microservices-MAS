import { Component, OnInit } from '@angular/core';
import { Book } from '../domain/book';
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';
import { CommonModule } from '@angular/common';
import { Author } from '../domain/author';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  books : Book[];
  authors: Author[];

  constructor(private bookService : BookService, private authorService : AuthorService){
    this.books = [];
    this.authors = [];
  }

  loadBooks():void{
    this.bookService.loadAllbooks().subscribe(
      data => {
        this.books = data;
        console.log(this.books);
      }
    );
  }

  getAuthor(id : number):string{
    let aux = "";
    this.authors.forEach(author => {
      if(author.id == id){
        console.log("Holi")
        aux = author.name+" "+author.lastname
      }
    });
    return aux;
  }

  loadAuthors(){
    this.authorService.loadAuthor().subscribe(
      data =>{        
        this.authors=data;    
        console.log(this.authors);        
      }
    );
  }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadBooks();
  }

}
