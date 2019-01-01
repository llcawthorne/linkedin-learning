# linkedin-learning-spring-cloud

Just a place to store my work as I go through the LinkedIn Learning: Spring Cloud course.  The course is by Frank P Moley III and takes 
about an hour and a half to work through (going by playtime, not including extra time to pause and type in examples).

This course splits up work by chapter of the video.  Initially they start unlabelled (just Chapter 1, Chapter 2, etc), but as I go through 
the video I like to put a descriptive title for each chapter from the videos, and includes a descriptive title in each sub-chapter 
directory.  Each chapter directory contains directories like 01_02 and 01_03, which means that contains the work for chapter 1, video 2
and chapter 1, video 3 respectively.  I like to add some description to these, to make them more valuable for later reference of
what was being done in the chapter/video exercise.  Then within each 01_02 directory, they is a Begin and End directory.  Begin starts 
at where the video expects you to begin from.  When I work the exercise, the Begin directory ends up looking mostly like the End
directory, unless I made any changes to the instructions.  When it's checked in after I'm done, Begin and End are mostly clones of
each other.  If you want to see where 01_03 began, you can look back at 01_02/End (or Begin, since they're the same).

In this course, we'll rework the exercise we did from Learning Spring Boot to be a cloud app instead of a monolith.  It should be 
interesting, since my background is more with monoliths.

The stuff with the config-server is pretty cool.  It's currently looking for a config repository at ${HOME}/Desktop/config.  At any time
it contains the contents of the config/ directory for the given chapter.  It needs to be running before any of the other projects from
the end of Chapter 2 onward will work.  It's currently configured for port 9000.  Just drag a config directory to your desktop and 
`git init` it to make it a repo, and everything will work.      

Note to self: In future, I may want to created a LinkedIn-Learning repository, and renamed these linkedin-learning-whatever repositories 
to just the whatever portion and make them submodules of the master linkedin-learning repository.  The current rate of one repository
per course is leading to generating a lot of repositories.  I do kinda of like being able to check out the individual repositories
when I need to reference how to do something at work, for example, but it's too easy to forget which repository has which example,
so might not be a bad idea to just be able to pull all the LinkedIn-Learning repos in one go.
