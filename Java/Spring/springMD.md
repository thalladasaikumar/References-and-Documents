## What Is Inversion of Control?

Inversion of Control(IoC) is a principle in software engineering by which the control of objects or portions of a program is transferred to a container or framework. It's most often used in the context of object-oriented programming.

### Spring Container example:

![Spring Container](/Java/Spring/images/spring_container.png)

- Primary functions
  1. Create and manage objects (Inversion of Control)
  2. Inject object's dependencies(Dependency Injection)

### Configuring Spring Container:

- XML configuration file(legacy, but most legacy apps still use this)
- Java Annotations(modern)
- Java Source Code(modern)

### Spring Development Process:

1. Configure your Spring Beans

   \<beans ... \>

   \<bean id="myCoach"
   class="com.thallada.com.BaseBallCoach"\>
   \</bean\>

   \</beans\>

2. Create s Spring Container

   - Spring containeris generally known as ApplicatioContext
   - Specialized implementations:

     - ClassPathXmlApplicationContext

       ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")

     - AnnotationConfigApplicationContext
     - GenericWebApplicationContext
     - Others.....

3. Retrive Beans from Spring Container

   Coach theCoach = context.getBean("myCoach", Coach.class);

## Dependency Injection:

Dependency injection is a pattern through which to implement IoC, where the control being inverted is the setting of object's dependencies.

### Injection Types:

- There are many types of injection with spring, we will see two most common.
  1. Constructor Injection.
  2. Setter Injection

### Development process - Constructor Injection:

1. Define the dependency interface and class
2. Create a constructor in your class for injections
3. Configure the dependency injection in Spring config file.

### Setting up constructor injection:

We should use _\<constructor-arg ref = "myFortuneService"/\>_ in our Application Context.

### Setting up setter injection:

We should use _\<property name="fortuneService" ref="myFortuneService"\> \</property\>_ in our Application Context.

### creating a properties file and using it in application context xml file.

\<context:property-placeholder location="classpath:sport.properties"/\>

## Bean Scopes

- Default scope is **Singleton**

  - What is Singleton?
    - Spring container creates only one instance of the bean, by default
    - It is cached in memory
    - All the requests for the bean will return a SHARED refernce to the SAME bean.
  - Explicitly Specify the Scope: using _scope="singleton"_

  | Scope          | Description                                                  |
  | -------------- | ------------------------------------------------------------ |
  | Singleton      | Creates a single shared instance of the bean. Default scope  |
  | prototype      | Creates a new bean instance for each container request       |
  | request        | Scoped to an HTTP web request. Only used for web apps.       |
  | session        | Scoped to an HTTP web session. Only used for web apps.       |
  | global-session | Scoped to a global HTTP web session. Only used for web apps. |

- Creating a Prototype Scope using _scope="prototype"_

## Bean Lifecycle:

![Bean Lifecycle](/Java/Spring/images/bean_lifecycle.png)

### Bean Lifecycle Methods/Hooks:

- You can add custom code during **bean initialization** using : _init-method="\<anyMethodName\>"_
  - Calling custom business logic methods
  - Setting up handles to resources(db, cockets, file, etc...)
- You can add custom code during **bean destruction** using: _destroy-method="\<anyMethodName\>"_
  - Calling custom business logic method
  - Clean up handles to resources(db, sockets, fies etc.....)

### What are Java Annotations?

- Special labels/markers added to Java
  classes.
- Provide meta-data about the class.
- Processed at compile time or run-time for special processing.

#### Annotations examples:

- @Override

### Why Spring Configuration

with Annotations?

- XML configuration can be verbose
- Configure your Spring beans with
  Annotations
- Annotations minimizes the XML
  configuration.

This will enable component scanning: _\<context:component-scan base-package="com.thallada.com"\>\</context:component-scan\>_

### Spring also supports default beanId's

Default Bean Id's: the class name make the _first letter lowercase_.

- ClassName: _TennisCoach_ -> Default Bean: _tennisCoach_

## Spring Auto Wiring?

- For dependency injection, Spring can use auto wiring.
- Spring will look for a class that _matches_ the property.
  - _matches by type:_ class or interface.
- Spring will inject it automatically ...hence it is autowired.
- If there are multiple matches?
  Answer: Spring has special support to handle this case. Use the @Quanlifier anootation.

### Autowiring Injection Types:

1.  Constructor Injections.
2.  Setter Injections.
3.  Field Injections.

### Bean Life cycle using annotations:

- @PostConstruct -> Bean initialization
- @PreDestroy -> Bean Destruction

## Spring MVC:

- Framework for building web applications in java.
- Based on Model-View-Controller design pattern
- Leverages features of the Core Spring Framework(IoC, DI)
  ![Spring MVC](/Java/Spring/images/spring_mvc.png)

[Spring MVC Documentation](www.luv2code.com/spring-mv-docs)

#### Components of a Spring MVC Application:

- A set of Web pages to layout UI components.
- A collection of Spring beans(controllers, services, etc...).
- Spring configuration(XML, Annotations or Java)
- Most common View Template is JSP + JSTL
- Other view templates supported:
  - Thymeleaf, Groovy
  - Velocity, Freemarker, etc...
- [Spring MVC Views](www.luv2code.com/spring-mvc-views)

#### Create Controller class

- Annotate class with @Controller
  - @Controller inherits from @Component ...supports scanning
