Spring React Example
====================

This projects demonstrates how to integrate client-side react js and general js content into a Spring Boot/Spring WebMVC
application.

 * A [Webpack/babel build](https://github.com/fforw/spring-react-example/blob/master/package.json#L31-L34) integrated 
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

Project layout
--------------

The java sources are under the normal src/main/java path. JavaScript sources are under src/main/js and the main entry point is src/main/js/main.js.

We use a traditional webapp layout with the static resource files in src/main/webapp since that seems to work better with resource reloading and
webpach watch mode


Build
-----

You can build the whole project with using maven or the included "mvnw/mvnw.cmd"

### Maven

```bash
    mvn clean package
```

### MVNW

On Linux/Os-X 

```bash
    ./mvnw clean package
```

or

```
    ./mvnw.cmd clean package
```


With a nodejs install you can also invoke the package.json scripts directly. I also used yarn for this project.



```json
{

    "scripts": {
        "build": "cross-env NODE_ENV=production webpack -p",
        "build-dev": "cross-env NODE_ENV=development webpack --debug --output-pathinfo",
        "watch": "cross-env NODE_ENV=development webpack --debug --output-pathinfo -w",
        "test": "cross-env NODE_ENV=test mocha --require babel-register -R spec src/test/js/"
    }
}
```

`yarn run build` is the target included in the maven build and creates an uglified/optimized js bundle in the WAR file.
`yarn run build-dev` builds a development version
`yarn run watch` builds a development version and enters watch mode which keeps compiling changes while editing
`yarn test` runs the javascript tests. This is also integrated into the maven test cycle.






 
