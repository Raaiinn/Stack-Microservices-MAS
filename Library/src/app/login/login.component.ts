import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  password : Boolean;
  message : string;
  
  constructor(private serviceLogin : LoginService, private formBuilder : FormBuilder, private router : Router, private authorService : AuthorService){
    this.password = false;
    this.message = '';
  }

  checkForm = this.formBuilder.group({
    email : '',
    password : ''
  });

  onSubmit() : void{

    let emailParam : string;
    let passwordParam : string;

    emailParam = ''+this.checkForm.value.email;
    passwordParam = ''+this.checkForm.value.password;

    
    this.serviceLogin.login(emailParam, passwordParam).subscribe(
        data =>{
          console.log(data)
          if(data){
            this.authorService.passMessage(data.id);
            this.router.navigateByUrl("/books");
          }else{
            this.message = 'Invalid user or password. Please check and try again';
          }
        }
      );

    this.checkForm.reset(); 

  }

  

  next():void{
    this.password = true;
  }
}
