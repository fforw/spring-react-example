package com.github.fforw.springreact.service;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ExampleController
{
    @RequestMapping("/")
    public String showHomeView(ModelMap modelMap)
    {
        modelMap.addAttribute("value", "Hello from controller");
        
        return "Home";
    }

    @RequestMapping("/another")
    public String showAnotherView()
    {
        return "Another";
    }
}
