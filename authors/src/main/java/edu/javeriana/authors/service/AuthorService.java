package edu.javeriana.authors.service;

import edu.javeriana.authors.domain.Author;
import edu.javeriana.authors.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class AuthorService {
    @Autowired
    private AuthorRepository repository;

    public List<Author> findAll(){
        return repository.findAll();
    }

    public Author findOneById(Integer id){
        return repository.findOneById(id);
    }

    public Author findOneByEmail(String email, String password){
        if(authenticated(email, password, repository.findOneByEmail(email))){
            return repository.findOneByEmail(email);
        }else{
            return null;
        }
    }

    public Author signUp(Integer id, String name, String lastname, Date born, String email, String password){
        return repository.save(instanceAuthor(id, name, lastname, born, email, password));
    }

    public Author instanceAuthor(Integer id, String name, String lastname, Date born, String email, String password){
        Author aux = new Author();
        aux.setId(id);
        aux.setName(name);
        aux.setLastname(lastname);
        aux.setBorn(born);
        aux.setEmail(email);
        aux.setPassword(password);
        return aux;
    }

    public Boolean authenticated(String email, String password, Author author){
        if(author==null){
            return false;
        }else{
            return email.equals(author.getEmail()) && password.equals(author.getPassword());
        }
    }
}
