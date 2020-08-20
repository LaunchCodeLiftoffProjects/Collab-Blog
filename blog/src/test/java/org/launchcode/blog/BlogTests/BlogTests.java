package org.launchcode.blog.BlogTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.launchcode.blog.Blogs.Blog;
import org.launchcode.blog.Blogs.BlogRepository;
import org.launchcode.blog.TestsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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
		blogTestsUtil.tearDown();
		Blog blog1 = new Blog("New Header", "New Subheader", "New Image", "New Body");
		Blog blog2 = new Blog("Second Header", "New Second Header", "Second image", "Second Body");
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
		Blog blog1 = new Blog("Our Very First Blog Post", "This is an actual Subheader", "An Actual Image", "This body has things we actually care about");
		MockMultipartFile firstFile = new MockMultipartFile("image", "filename.txt", "text/plain", "some xml".getBytes());
		MvcResult result = mockMvc.perform(multipart("/blogs").file(firstFile).param("blogData", objectMapper.writeValueAsString(blog1)))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.header").value("Our Very First Blog Post"))
				.andReturn();
		assertEquals(1, blogRepository.findAll().size());
		blogTestsUtil.tearDown();
	}

	@Test
	public void getBlogById_ReturnsCorrectBlog() throws Exception {
		blogTestsUtil.tearDown();
		Blog blog1 = new Blog("Superman", "Batman", "Image of Justice League", "They are the superior super heroes");
		blogRepository.save(blog1);
		MvcResult result = mockMvc.perform(get("/blogs/" + blog1.getId()))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect((jsonPath("$.header").value(blog1.getHeader())))
				.andReturn();
		blogTestsUtil.tearDown();
	}

	@Test
	void whenDeleteAllFromClientRepository_thenRepositoryShouldBeEmpty(){
		blogTestsUtil.setup();
		blogTestsUtil.tearDown();
		assertEquals(0, blogRepository.findAll().size());
	}
	
}
