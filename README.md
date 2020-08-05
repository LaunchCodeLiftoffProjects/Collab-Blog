# Collab-Blog
LaunchCode's capstone open source project. 

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
