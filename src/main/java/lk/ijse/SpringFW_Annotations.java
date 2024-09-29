package lk.ijse;

public class SpringFW_Annotations {

        public static void main(String[] args) {
            System.out.println("Spring Framework Annotations Collection:\n");

            // Core Annotations
            System.out.println("@Component: Marks a class as a Spring-managed component.");
            System.out.println("@Controller: Specialized version of @Component for Spring MVC controllers.");
            System.out.println("@Service: Specialized version of @Component for service layer.");
            System.out.println("@Repository: Specialized version of @Component for DAOs.");
            System.out.println("@Autowired: Injects dependencies automatically by type.");
            System.out.println("@Qualifier: Specifies which bean to inject when multiple beans are available.");
            System.out.println("@Value: Injects values from properties files.");

            // Configuration Annotations
            System.out.println("@Configuration: Indicates a source of bean definitions.");
            System.out.println("@Bean: Declares a Spring bean within a method.");
            System.out.println("@ComponentScan: Configures component scanning for Spring beans.");
            System.out.println("@PropertySource: Specifies location of properties files.");
            System.out.println("@Import: Imports other configuration classes.");
            System.out.println("@Profile: Specifies active profiles for beans.");

            // MVC Annotations
            System.out.println("@RequestMapping: Maps HTTP requests to handler methods.");
            System.out.println("@GetMapping: Specialized for handling HTTP GET requests.");
            System.out.println("@PostMapping: Specialized for handling HTTP POST requests.");
            System.out.println("@PutMapping: Specialized for handling HTTP PUT requests.");
            System.out.println("@DeleteMapping: Specialized for handling HTTP DELETE requests.");
            System.out.println("@PathVariable: Binds URI template variables to method parameters.");
            System.out.println("@RequestBody: Binds HTTP request body to a method parameter.");
            System.out.println("@ResponseBody: Writes method return value to the HTTP response body.");
            System.out.println("@ModelAttribute: Binds method parameters or return values to the model.");
            System.out.println("@ExceptionHandler: Defines exception handling logic.");
            System.out.println("@RestController: Combination of @Controller and @ResponseBody for REST APIs.");

            // AOP Annotations
            System.out.println("@Aspect: Marks a class as an Aspect for AOP.");
            System.out.println("@Before: Advice to run before method execution.");
            System.out.println("@After: Advice to run after method execution.");
            System.out.println("@Around: Advice to run around method execution.");
            System.out.println("@AfterReturning: Advice to run after a method successfully returns.");
            System.out.println("@AfterThrowing: Advice to run if a method throws an exception.");

            // Transaction Management
            System.out.println("@Transactional: Manages transactions at method or class level.");

            // Validation Annotations
            System.out.println("@Valid: Triggers validation on method parameters.");
            System.out.println("@NotNull: Ensures a value is not null.");
            System.out.println("@Size: Ensures a collection or string has a defined size.");

            // Spring Boot Specific
            System.out.println("@SpringBootApplication: Combines @Configuration, @ComponentScan, @EnableAutoConfiguration.");
            System.out.println("@EnableAutoConfiguration: Automatically configures Spring Boot application.");
            System.out.println("@EnableScheduling: Enables Spring's task scheduling.");
            System.out.println("@EnableAsync: Enables asynchronous method execution.");

            System.out.println("\nEnd of Annotations Collection.");
        }
}


