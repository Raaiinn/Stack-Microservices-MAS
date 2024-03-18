import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../domain/book';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../services/author.service';
import { AuthbarComponent } from '../authbar/authbar.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, AuthbarComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  books : Book[];
  author : number;
  name : string;

  constructor(private bookService : BookService, private authorService : AuthorService){
      this.books = [];
      this.author = 0;
      this.name = "";
      this.authorService.getAuthor.subscribe(data => this.author = data)
  }
  ngOnInit(): void {
    this.loadBooksByAuthor(this.author);
    this.authorService.loadAuthorById(this.author).subscribe(
      data =>{
        this.name = data.name;
      }
    )
  }

  loadBooksByAuthor(author : number): void{
      this.bookService.loadBooksByAuthor(author).subscribe(
        data=>{
          this.books = data;
          console.log(data);
        }
      );
  }

}
