package org.launchcode.blog.Blogs;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BlogController {

	@Autowired
	private ObjectMapper objectMapper;
	
	@Autowired
	private BlogRepository blogRepository;
	
	@GetMapping("/blogs")
	public List<Blog> getAllBlogs(){
		return blogRepository.findAll();
	}

	@PostMapping("/blogs")
	public Blog getAllBlogs(@RequestBody String blog1) throws JsonProcessingException {
		System.out.println(blog1);
		Blog blogtwo = new Blog();
		Blog blog = objectMapper.readValue(blog1, Blog.class);
		System.out.println(blog.toString());
		return blogRepository.save(blog);
	}
	
}
