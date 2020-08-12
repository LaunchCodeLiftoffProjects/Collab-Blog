package org.launchcode.blog.BlogTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.launchcode.blog.Blogs.Blog;
import org.launchcode.blog.Blogs.BlogRepository;
import org.launchcode.blog.TestsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@TestsInterface
public class BlogTests {

	@Autowired
	private ObjectMapper objectMapper;

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

	@Test
	public void postBlogs_SavesBlogToDatabase() throws Exception {
		blogTestsUtil.tearDown();
		Blog blog1 = new Blog("Our Very First Blog Post", "This is an actual Subheader", "An Actual Image", "This body has things we actually care about", new Date());
		MvcResult result = mockMvc.perform(post("/blogs").content(objectMapper.writeValueAsString(blog1)))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.header").value("Our Very First Blog Post"))
				.andReturn();
		assertEquals(1, blogRepository.findAll().size());
		blogTestsUtil.tearDown();
	}
	
}
