package org.launchcode.blog.Blogs;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
	public Blog getAllBlogs(@RequestPart("blogData") String blogData, @RequestPart("image") MultipartFile image) throws JsonProcessingException {
		Blog blog = objectMapper.readValue(blogData, Blog.class);
		System.out.println(image.getOriginalFilename());
		blog.setTimestamp(new Date());
		return blogRepository.save(blog);
	}

	@GetMapping("/blogs/{id}")
	public Optional<Blog> getBlogById(@PathVariable("id") long id){
		return blogRepository.findById(id);
	}
	
}
