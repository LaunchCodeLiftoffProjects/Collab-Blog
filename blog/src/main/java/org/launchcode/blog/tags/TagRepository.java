package org.launchcode.blog.tags;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface TagRepository extends CrudRepository<Tag, Integer> {
    Tag findByName(String name);
    boolean existsByName(String name);
}
