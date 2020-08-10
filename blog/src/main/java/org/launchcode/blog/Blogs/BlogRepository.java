package org.launchcode.blog.Blogs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface BlogRepository extends JpaRepository<Blog, Long> {
}
