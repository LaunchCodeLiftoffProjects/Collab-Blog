package org.launchcode.blog.BlogTests;

import org.junit.jupiter.api.Test;
import org.launchcode.blog.TestsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@TestsInterface
public class BlogTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private BlogTestsUtil blogTestsUtil;
	
	@Test
	public void getBlogs_ReturnsListOfBlogs() throws Exception {
		blogTestsUtil.setup();
		blogTestsUtil.setup();
		
		MvcResult result = mockMvc.perform(get("/blogs"))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.header").value("First Blog"))
				.andExpect(jsonPath("$.").value(hasSize(2)))
				.andReturn();
		blogTestsUtil.tearDown();
	}
	
}
