import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [{path: '', component: HomeComponent}, {path: 'login', component: LoginComponent}, {path: 'books', component: BookComponent}, {path:'register', component:RegisterComponent}, {path: 'create', component: CreateComponent}];
