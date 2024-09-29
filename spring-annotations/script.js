const annotations = {
    "Core Annotations": [
        { title: "@Component", description: "Marks a class as a Spring-managed component." },
        { title: "@Controller", description: "Specialized version of @Component for Spring MVC controllers." },
        { title: "@Service", description: "Specialized version of @Component for service layer components." },
        { title: "@Repository", description: "Specialized version of @Component for Data Access Objects (DAOs)." },
        { title: "@Autowired", description: "Injects dependencies automatically by type." },
        { title: "@Qualifier", description: "Specifies which bean to inject when multiple candidates are available." },
        { title: "@Value", description: "Injects values from properties files." },
    ],
    "Configuration Annotations": [
        { title: "@Configuration", description: "Indicates a source of bean definitions." },
        { title: "@Bean", description: "Declares a Spring bean within a method." },
        { title: "@ComponentScan", description: "Configures component scanning for Spring beans." },
        { title: "@PropertySource", description: "Specifies the location of properties files." },
        { title: "@Import", description: "Imports other configuration classes." },
        { title: "@Profile", description: "Specifies active profiles for beans." },
    ],
    "Web MVC Annotations": [
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
    ],
    "Aspect-Oriented Programming (AOP) Annotations": [
        { title: "@Aspect", description: "Marks a class as an Aspect for AOP." },
        { title: "@Before", description: "Advice that runs before method execution." },
        { title: "@After", description: "Advice that runs after method execution." },
        { title: "@Around", description: "Advice that runs around method execution." },
        { title: "@AfterReturning", description: "Advice that runs after a method successfully returns." },
        { title: "@AfterThrowing", description: "Advice that runs if a method throws an exception." },
    ],
    "Transaction Management Annotations": [
        { title: "@Transactional", description: "Manages transactions at the method or class level." },
    ],
    "Validation Annotations": [
        { title: "@Valid", description: "Triggers validation on method parameters." },
        { title: "@NotNull", description: "Ensures a value is not null." },
        { title: "@Size", description: "Ensures a collection or string has a defined size." },
    ],
    "Spring Boot Annotations": [
        { title: "@SpringBootApplication", description: "Combines @Configuration, @ComponentScan, and @EnableAutoConfiguration." },
        { title: "@EnableAutoConfiguration", description: "Automatically configures a Spring Boot application." },
        { title: "@EnableScheduling", description: "Enables Spring's task scheduling." },
        { title: "@EnableAsync", description: "Enables asynchronous method execution." },
    ],
};

const annotationsList = document.getElementById("annotations-list");

for (const [category, items] of Object.entries(annotations)) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "annotation-category";
    categoryDiv.innerHTML = `<h2>${category}</h2>`;

    items.forEach(annotation => {
        const item = document.createElement("div");
        item.className = "annotation-item";
        item.innerHTML = `<div class="annotation-title">${annotation.title}</div>
                          <div class="annotation-description">${annotation.description}</div>`;
        categoryDiv.appendChild(item);
    });

    annotationsList.appendChild(categoryDiv);
}
