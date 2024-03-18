import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  author : number;

  checkForm = this.formBuilder.group({
    id : 0,      
    title : '',
    launch : '',
    pages : 0,
    cover : ''
  });

  constructor(private router : Router, private formBuilder : FormBuilder, private bookService : BookService, private authorService : AuthorService){
    this.author = 0;
  }

  onSubmit(): void{
    let idParam, pagesParam, authorParam : number;
    let titleParam, launchParam, coverParam : string;
   
    this.authorService.getAuthor.subscribe(data =>{
      this.author = data
    });

    idParam = this.checkForm.value.id;
    pagesParam = this.checkForm.value.pages;
    titleParam = ''+this.checkForm.value.title;
    launchParam = ''+this.checkForm.value.launch;
    coverParam = ''+this.checkForm.value.cover;
    authorParam = this.author;

    this.bookService.publishBook(idParam!!, titleParam, launchParam, pagesParam!!, authorParam, coverParam).subscribe(
      data =>{
        console.log(data)
        this.authorService.passMessage(data.author);
        this.router.navigateByUrl("/books");
      }
    );
    
  }

}
