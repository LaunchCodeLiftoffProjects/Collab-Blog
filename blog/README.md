![LaunchCode](./images/LaunchCode_ltblue%20copy.png)
# LaunchCode's Collab Blog
#### Note: In order to get the most out of this project, read this README completely.


## About
LaunchCode provides and inclusive and supportive community to help get you
started on your first large open source project. 

This project is called Collab-Blog, and is a blog site where fellow LaunchCoders can
share blog posts that cover a wide range of topics. Similar to [Medium](https://medium.com/),
Collab-Blog allows users to create new blogs and share them with other users!
Collab-Blog is a full stack web application written in 
Angular, Spring Boot, and MySQL. 

## Your Task
You are going to help us build this project! We have written many [user stories](https://education.launchcode.org/liftoff/modules/project/user-stories.html?highlight=user%20story)
that you will help us complete. So first, let's give you a lay of the land. 
1. Navigate to [Issues](https://github.com/LaunchCodeLiftoffProjects/Collab-Blog/issues). There you will see 

Left off here
**** 


Models: 
Blog - Header, subheader, image (link to S3 bucket that it gets placed in), body, timestamp, status (published or draft), OneToMany with Comments

Comments - Timestamp, ManyToOne with Blog, body


Endpoints:

"/blogs"

-GET - return all blogs owned by that user
-POST - create a new blog

/blogs/{id}

- GET - return that single blog
-PUT - Update the blog with new info
-DELETE - delete this blog by ID


MySQL database creation
docker run -d --env-file ~/.docker/envs/mysql-blog-test.env -p 3308:3306 --name blog-test mysql


Steps: 
Install Bootstrap and npm in terminal - https://www.techiediaries.com/angular-bootstrap/