Spring React Example
====================

This projects demonstrates how to integrate client-side react js and general js content into a Spring Boot/Spring WebMVC
application.

 * A [Webpack/babel build](https://github.com/fforw/spring-react-example/blob/master/package.json#L22-L25) integrated 
 into the [maven build](https://github.com/fforw/spring-react-example/blob/master/pom.xml#L67-L141)
 
 * A Spring view implemention for client-side react views 
  [1](https://github.com/fforw/spring-react-example/blob/master/src/main/java/com/github/fforw/springreact/config/ReactViewResolver.java)
  [2](https://github.com/fforw/spring-react-example/blob/master/src/main/java/com/github/fforw/springreact/config/ReactView.java)
  

The ReactView implementation embeds the Spring view model and the view name in a JSON data blob that gets embedded inside
a very [simple basic HTML template](https://github.com/fforw/spring-react-example/blob/master/src/main/resources/templates/template.html).

This boots up a js entry point that looks up the view name by name from a [views folder](https://github.com/fforw/spring-react-example/tree/master/src/main/js/views).
All view components in that folder get automatically loaded using webpacks require context feature.

As an additional feature the ReactView can answer to requests with just the view data json blob when it gets called
with a "x-requested-with" : "whatwg-fetch" header. We use the "whatwg-fetch" polyfill to provide fetch for all browsers
and set that header.

Routes
------

This example does the normal spring server-side routing and embeds react views into that.

### Example Controller

Here we see Home mapping from our [example controller](https://github.com/fforw/spring-react-example/blob/master/src/main/java/com/github/fforw/springreact/service/ExampleController.java):

```java  
@Controller
public class ExampleController
{
    @RequestMapping("/")
    public String showHomeView(ModelMap modelMap)
    {
        modelMap.addAttribute("value", "Hello from controller");
        return "Home";
    }
}
```  

The selected view "Home" automatically gets resolved to the view component in [src/main/js/views/Home.js](https://github.com/fforw/spring-react-example/blob/master/src/main/js/views/Home.js).

That home component then gets invoked with the props resulting from the Spring view model. In this case the equivalent of

```js

    <Home value="Hello from controller"/>

```

