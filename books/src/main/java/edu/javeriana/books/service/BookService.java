package edu.javeriana.books.service;

import edu.javeriana.books.domain.Book;
import edu.javeriana.books.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository repository;

    public List<Book> findAll(){
        return repository.findAll();
    }

    public List<Book> findAllByAuthor(Integer author){
        return repository.findAllByAuthor(author);
    }
    public void create(Integer id, Integer author, String title, Date launch, Integer pages, String cover){
        repository.save(instanceBook(id, author, title, launch, pages, cover));
    }

    public Book update(Integer id, Integer author, String title, Date launch, Integer pages, String cover){
        if(repository.existsById(id)){
            Book aux = instanceBook(id, author, title, launch, pages, cover);
            return repository.save(aux);
        }else{
            return null;
        }
    }

    public Book instanceBook(Integer id, Integer author, String title, Date launch, Integer pages, String cover){
        Book aux = new Book();
        aux.setId(id);
        aux.setAuthor(author);
        aux.setLaunch(launch);
        aux.setPages(pages);
        aux.setTitle(title);
        aux.setCover(cover);
        return aux;
    }
    public void delete(Integer id){
        repository.deleteById(id);
    }
}
