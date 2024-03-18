package edu.javeriana.authors.repository;

import edu.javeriana.authors.domain.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {

    Author findOneById(Integer id);
    Author findOneByEmail(String email);
}
