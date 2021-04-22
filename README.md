# Course Automation: Suggesting legal teammates for projects
 
## Members
- [Carina Wickström](https://github.com/carinawic) (carinawi@kth.se)
- [Justin](https://github.com/Agriad) (arieltan@kth.se)

## Proposal
This code is a github actions to facilitate finding teammates for students in the DevOps KTH course DD2482.

How to use:

In the DevOps course repo (https://github.com/KTH/devops-course)
The student opens an issue with the title: "Looking for a teammate: my-name@kth.se"
Thereafter, a comment will appear on that issue with a list of all legal teammates in each work category.

The process takes approximately 30 seconds.

When the student searching for a legal teammate, a list will be given of students' email addresses. 
The suggested legal teammates follow the following criteria:

- The potential teammate has posted < 4 project proposals.
- The students and the potential teammate have not worked in the same group twice (or more).
- The potential teammate has not yet proposed a project in that category.

The resulting issue comment has the following structure:

Legal Teammates: example@kth.se example@kth.se
course-automation: example@kth.se example@kth.se
demo: example@kth.se example@kth.se example@kth.se
essay: example@kth.se example@kth.se example@kth.se
executable-tutorial: example@kth.se example@kth.se
feedback:  example@kth.se example@kth.se 
open-source:  example@kth.se example@kth.se
presentation:  example@kth.se example@kth.se

A fork of the DD2482 course branch containing example runs of our code can be found here (https://github.com/Agriad/devops-course/tree/demo)