package org.launchcode.blog.BlogTests;

import org.junit.jupiter.api.Test;
import org.launchcode.blog.Blogs.Blog;
import org.launchcode.blog.Blogs.BlogRepository;
import org.launchcode.blog.TestsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@TestsInterface
public class BlogTests {

	@Autowired
	private BlogRepository blogRepository;
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private BlogTestsUtil blogTestsUtil;


	@Test
	public void fillDatabaseWithBlogs() {
		Blog blog1 = new Blog("New Header", "New Subheader", "New Image", "New Body", new Date());
		Blog blog2 = new Blog("Second Header", "New Second Header", "Second image", "Second Body", new Date());
		blogRepository.save(blog1);
		blogRepository.save(blog2);
	}
	@Test
	public void getBlogs_ReturnsListOfBlogs() throws Exception {
		blogTestsUtil.tearDown();
		blogTestsUtil.setup();
		blogTestsUtil.setup();
		
		MvcResult result = mockMvc.perform(get("/blogs"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].header").value("First Blog"))
				.andExpect(jsonPath("$").value(hasSize(2)))
				.andReturn();
		blogTestsUtil.tearDown();
	}
	
}
