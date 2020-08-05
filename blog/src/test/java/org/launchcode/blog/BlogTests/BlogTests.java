package org.launchcode.blog.BlogTests;

import org.junit.jupiter.api.Test;
import org.launchcode.blog.TestsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@TestsInterface
public class BlogTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void getBlogs_ReturnsListOfBlogs() throws Exception {
		BlogTestsUtil.setup();
		BlogTestsUtil.setup();
		
		MvcResult result = mockMvc.perform(get("/blogs"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.header").value("First Blog"))
				.andExpect(jsonPath("$.").value(hasSize(2)))
				.andReturn();
		BlogTestsUtil.tearDown();
	}
	
}
