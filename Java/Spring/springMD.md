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
