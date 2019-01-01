This is where I am keeping my work from the LinkedIn Learning course on Spring
Test Driven Development.

This course was ok.  I had trouble getting it to work with MySQL 8.0.13, so I
changed all the exercises to work with H2.  It does show how to do both
integration and unit tests for the main components of a Spring application.  I
think I'ld like the unit tests better if they stuck with the Spring runner and
used @MockBean annotations, instead of switching to the Mockito runner and using
@Mock and InjectMocks.  Not sure if you could do that with the version of Spring
they're using though.  Oh, they do that in Chapter 3, just not in Chapter 2.  I
guess they wanted to show the two different ways of doing it. 
