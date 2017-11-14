package com.github.fforw.springreact.config;

import com.github.fforw.springreact.util.ContentType;
import com.github.fforw.springreact.template.BaseTemplate;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.View;
import org.svenson.JSON;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * React view implementation for spring.
 *
 * Render as HTML base template with an embedded JSON data block.
 *
 */
public class ReactView
    implements View
{
    private final static Logger log = LoggerFactory.getLogger(ReactView.class);

    private final BaseTemplate template;

    private final String name;

    private final Locale locale;


    public ReactView(BaseTemplate template, String name, Locale locale)
    {
        this.template = template;
        this.name = name;
        this.locale = locale;
    }


    @Override
    public String getContentType()
    {
        return "text/html";
    }


    @Override
    public void render(
        Map<String, ?> map, HttpServletRequest request, HttpServletResponse response
    ) throws Exception
    {
        final Map<String, Object> model = (Map<String, Object>) map;

        response.setContentType(ContentType.HTML);
        response.setCharacterEncoding("UTF-8");

        ServletOutputStream os = null;
        try
        {

            // add our view name to the model
            model.put("viewName", name);

            // create a new model map for the template
            final Map<String, Object> templateModel = new HashMap<>();
            // containing the context path
            templateModel.put("CONTEXT_PATH", request.getContextPath());
            // and the JSON for our current spring model
            templateModel.put("VIEW_DATA", JSON.defaultJSON().forValue(model));

            // evaluate and write template
            os = response.getOutputStream();
            template.write(os, templateModel);
            os.flush();
        }
        catch (IOException e)
        {
            IOUtils.closeQuietly(os);

            // these are most commonly browser windows being closed before the last request is done
            log.debug("Error sending view", e);
        }
        catch (Exception e)
        {
            IOUtils.closeQuietly(os);
            // these are most commonly browser windows being closed before the last request is done
            log.error("Error sending view", e);
        }
        
    }
}
