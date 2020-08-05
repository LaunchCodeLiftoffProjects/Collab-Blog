package org.launchcode.blog.BlogTests;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class BlogTestsUtil {
	
	@Autowired
	private BlogRepository blogRepository;
	
	public void setup(){
		Blog blog = new Blog("First Blog", "My very first blog", "http://www.test.com", "This is my body", new Date(), Status.Published);
		blogRepository.save(blog);
	}
	
	public void tearDown(){
		blogRepository.deleteAll();
	}
}
