package edu.javeriana.authors.controller;

import edu.javeriana.authors.domain.Author;
import edu.javeriana.authors.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/authors")
public class AuthorController {
    @Autowired
    private AuthorService service;

    @GetMapping("findall")
    public List<Author> findAll(){
        return service.findAll();
    }

    @GetMapping("find")
    public Author findOneById(@RequestParam("id") Integer id){ return service.findOneById(id); }

    @PostMapping("signup")
    public Author signUp(@RequestParam("id") Integer id, @RequestParam("name") String name, @RequestParam("lastname") String lastname, @RequestParam("born") String born, @RequestParam("email") String email, @RequestParam("password") String password) throws ParseException {
        return service.signUp(id, name, lastname, new SimpleDateFormat("dd-MM-yyyy").parse(born), email, password);
    }

    @PostMapping("login")
    public Author findOneByEmail(@RequestParam("email") String email, @RequestParam("password") String password){
        return service.findOneByEmail(email, password);
    }
}
