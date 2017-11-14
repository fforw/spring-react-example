package com.github.fforw.springreact.config;

import com.github.fforw.springreact.ExampleException;
import com.github.fforw.springreact.template.BaseTemplate;
import org.apache.commons.io.IOUtils;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;

import java.io.IOException;
import java.util.Locale;

/**
 * Resolves all views to ReactView instances. We don't know what views there are in the js bundle so we accept
 * all view names for this demo.
 */
public class ReactViewResolver
    implements ViewResolver
{
    private static final String TEMPLATE_RESOURCE = "templates/template.html";

    private final BaseTemplate template;


    public ReactViewResolver()
    {
        final ClassLoader classLoader = this.getClass().getClassLoader();

        try
        {
            template = new BaseTemplate(
                IOUtils.toString(
                    classLoader.getResourceAsStream(TEMPLATE_RESOURCE),
                    BaseTemplate.UTF_8
                )
            );
        }
        catch (IOException e)
        {
            throw new ExampleException(e);
        }
    }

    @Override
    public View resolveViewName(String s, Locale locale) throws Exception
    {
        return new ReactView(template, s, locale);
    }
}
