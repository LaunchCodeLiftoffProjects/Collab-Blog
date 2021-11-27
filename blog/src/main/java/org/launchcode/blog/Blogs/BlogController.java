package org.launchcode.blog.Blogs;

import com.amazonaws.services.s3.transfer.model.UploadResult;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.launchcode.blog.S3.S3Service;
import org.launchcode.blog.tags.Tag;
import org.launchcode.blog.tags.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class BlogController {

	@Autowired
	private ObjectMapper objectMapper;
	
	@Autowired
	private BlogRepository blogRepository;

	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private S3Service S3Service;
	
	@GetMapping("/blogs")
	public List<Blog> getAllBlogs(){
		return blogRepository.findAll();
	}

	@PostMapping("/blogs")
	public Blog getAllBlogs(@RequestParam("blogData") String blogData, @RequestPart("image") MultipartFile image) throws JsonProcessingException {
		Blog blog = objectMapper.readValue(blogData, Blog.class);
		blog.setTimestamp(new Date());
		try{
			UploadResult result = S3Service.uploadImageToS3(image);
			URL url = S3Service.urlCreationFromAwsUpload(result, image.getOriginalFilename());
			String urlString = url.toString();
			blog.setImage(urlString);
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
