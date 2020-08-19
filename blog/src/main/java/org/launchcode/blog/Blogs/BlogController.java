package org.launchcode.blog.Blogs;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.launchcode.blog.S3.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
	
	@Autowired
	private S3Service S3Service;
	
	@GetMapping("/blogs")
	public List<Blog> getAllBlogs(){
		return blogRepository.findAll();
	}

	@PostMapping("/blogs")
	public Blog getAllBlogs(@RequestPart("blogData") String blogData, @RequestPart("image") MultipartFile image) throws JsonProcessingException {
		Blog blog = objectMapper.readValue(blogData, Blog.class);
		System.out.println(image.getOriginalFilename());
		blog.setTimestamp(new Date());
		try{
			System.out.println(S3Service.uploadImageToS3(image));
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return blogRepository.save(blog);
	}

	@GetMapping("/blogs/{id}")
	public Optional<Blog> getBlogById(@PathVariable("id") long id){
		return blogRepository.findById(id);
	}
	
}
