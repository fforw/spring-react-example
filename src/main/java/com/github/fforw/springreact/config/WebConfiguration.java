package com.github.fforw.springreact.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfiguration
    extends WebMvcConfigurerAdapter
{
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry)
    {
        registry.viewResolver(
            new ReactViewResolver()
        );
    }
}
