package com.github.fforw.springreact;

import com.github.fforw.springreact.config.ExampleApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(
	classes = {
		ExampleApplication.class
	}
)
public class ExampleApplicationTests
{

	@Test
	public void contextLoads()
	{

	}

}
