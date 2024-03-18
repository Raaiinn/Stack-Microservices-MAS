package edu.javeriana.books.controller;

import edu.javeriana.books.domain.Book;
import edu.javeriana.books.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/books")
@CrossOrigin("*")
public class BookController {
    @Autowired
    private BookService service;

    @GetMapping("findall")
    public List<Book> findAll(){
        return service.findAll();
    }

    @GetMapping("find")
    public List<Book> findAllByAuthor(@RequestParam("author") Integer author){
        return service.findAllByAuthor(author);
    }

    @PostMapping("create")
    public void create(@RequestParam("id") Integer id, @RequestParam("title") String title, @RequestParam("author") Integer author, @RequestParam("launch") String launch, @RequestParam("pages") Integer pages, @RequestParam("cover") String cover) throws ParseException {
        service.create(id, author, title, new SimpleDateFormat("dd-MM-yyyy").parse(launch), pages, cover);
    }

    @PutMapping("update")
    public Book update(@RequestParam("id") Integer id, @RequestParam("title") String title, @RequestParam("author") Integer author, @RequestParam("launch") Date launch, @RequestParam("pages") Integer pages, @RequestParam("cover") String cover){
        return service.update(id, author, title, launch, pages, cover);
    }

    @DeleteMapping("delete")
    public void delete(@RequestParam("id") Integer id){
       service.delete(id);
    }
}
