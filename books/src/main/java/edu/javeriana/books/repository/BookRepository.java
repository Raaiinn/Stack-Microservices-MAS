package edu.javeriana.books.repository;

import edu.javeriana.books.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findAllByAuthor(Integer author);
}
