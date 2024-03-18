import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  warning : string;

  checkForm = this.formBuilder.group({
    id : 0,      
    name : '',
    lastname : '',
    birth : '',
    email : '',  
    password : '',
    confirmation : '',
  });

  constructor(private router : Router, private authorService : AuthorService, private formBuilder : FormBuilder){
    this.warning = ""

  }
  onSubmit() : void{
    let idParam : number | undefined | null;
    let nameParam : string;
    let lastnameParam : string;
    let emailParam : string;
    let passwordParam : string;
    let dateParam : string;

    if(this.checkForm.value.password == this.checkForm.value.confirmation){
      idParam = this.checkForm.value.id;
      nameParam = ''+this.checkForm.value.name;
      lastnameParam = ''+this.checkForm.value.lastname;
      dateParam = ''+this.checkForm.value.birth;
      emailParam = ''+this.checkForm.value.email;
      passwordParam = ''+this.checkForm.value.confirmation;

      this.authorService.signUp(idParam!!, nameParam, lastnameParam, dateParam, emailParam, passwordParam).subscribe(
        data=>{
          console.log(data);
          if(data){
            this.router.navigateByUrl("");
          }
        }
      );

    }else{
      this.warning = "Passwords don't match";
      this.checkForm.reset(); 
    }
    
  }
}

  

