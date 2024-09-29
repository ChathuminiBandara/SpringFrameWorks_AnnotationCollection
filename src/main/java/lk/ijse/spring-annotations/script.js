const annotations = [
    { title: "@Component", description: "Marks a class as a Spring-managed component." },
    { title: "@Controller", description: "Specialized version of @Component for Spring MVC controllers." },
    { title: "@Service", description: "Specialized version of @Component for service layer." },
    { title: "@Repository", description: "Specialized version of @Component for DAOs." },
    { title: "@Autowired", description: "Injects dependencies automatically by type." },
    { title: "@Qualifier", description: "Specifies which bean to inject when multiple beans are available." },
    { title: "@Value", description: "Injects values from properties files." },
    { title: "@Configuration", description: "Indicates a source of bean definitions." },
    { title: "@Bean", description: "Declares a Spring bean within a method." },
    { title: "@ComponentScan", description: "Configures component scanning for Spring beans." },
    { title: "@PropertySource", description: "Specifies location of properties files." },
    { title: "@Import", description: "Imports other configuration classes." },
    { title: "@Profile", description: "Specifies active profiles for beans." },
    { title: "@RequestMapping", description: "Maps HTTP requests to handler methods." },
    { title: "@GetMapping", description: "Specialized for handling HTTP GET requests." },
    { title: "@PostMapping", description: "Specialized for handling HTTP POST requests." },
    { title: "@PutMapping", description: "Specialized for handling HTTP PUT requests." },
    { title: "@DeleteMapping", description: "Specialized for handling HTTP DELETE requests." },
    { title: "@PathVariable", description: "Binds URI template variables to method parameters." },
    { title: "@RequestBody", description: "Binds HTTP request body to a method parameter." },
    { title: "@ResponseBody", description: "Writes method return value to the HTTP response body." },
    { title: "@ModelAttribute", description: "Binds method parameters or return values to the model." },
    { title: "@ExceptionHandler", description: "Defines exception handling logic." },
    { title: "@RestController", description: "Combination of @Controller and @ResponseBody for REST APIs." },
    { title: "@Aspect", description: "Marks a class as an Aspect for AOP." },
    { title: "@Before", description: "Advice to run before method execution." },
    { title: "@After", description: "Advice to run after method execution." },
    { title: "@Around", description: "Advice to run around method execution." },
    { title: "@AfterReturning", description: "Advice to run after a method successfully returns." },
    { title: "@AfterThrowing", description: "Advice to run if a method throws an exception." },
    { title: "@Transactional", description: "Manages transactions at method or class level." },
    { title: "@Valid", description: "Triggers validation on method parameters." },
    { title: "@NotNull", description: "Ensures a value is not null." },
    { title: "@Size", description: "Ensures a collection or string has a defined size." },
    { title: "@SpringBootApplication", description: "Combines @Configuration, @ComponentScan, @EnableAutoConfiguration." },
    { title: "@EnableAutoConfiguration", description: "Automatically configures Spring Boot application." },
    { title: "@EnableScheduling", description: "Enables Spring's task scheduling." },
    { title: "@EnableAsync", description: "Enables asynchronous method execution." },
];

const annotationsList = document.getElementById("annotations-list");

annotations.forEach(annotation => {
    const item = document.createElement("div");
    item.className = "annotation-item";
    item.innerHTML = `<div class="annotation-title">${annotation.title}</div>
                      <div class="annotation-description">${annotation.description}</div>`;
    annotationsList.appendChild(item);
});
