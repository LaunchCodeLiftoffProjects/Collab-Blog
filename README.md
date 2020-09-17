![LaunchCode](./blog/images/LaunchCode_ltblue%20copy.png)
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
a few labels that we will use to give you an idea of what to expect with each Issue:


Note: We will need to make this section accessible

2. Read through all the issues to get a good idea of what you'd like to 
tackle based on your interest and skillset. For your first contribution, we recommend you
trying out a 'good first issue' tag. Beyond that, have fun with it. This is a great way for you not only to expand your skills, but to build a fun project with other LaunchCoders. 
#  How to get started

First things first, join the slack channel #open-source-project-work in the LaunchCode slack channel. There you'll be surrounded by other LaunchCoders working on this project. Once you do that, send a direct message to Nick Rafferty and John Woolbright letting them know that you're interested in working on the project. 


Next, for this project, you will need MySQL with MySQL Workbench, Java 13, NPM and Angular CLI installed locally. Here are some helpful links if you need to get those installed: 

## Installations
- [Node](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-node.html) (Also installs NPM cli)
- [Terminal](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-terminal.html)
- [MySQL with MySQL Workbench](https://education.launchcode.org/java-web-development/appendices/sql-install.html)
- [Java](https://education.launchcode.org/java-web-development/chapters/introduction-and-setup/index.html)

#### Optional Installations
You are welcome to use any code editor that you prefer, but we highly recommend you use Visual Studio Code when working with Angular and IntelliJ when working with Spring Boot. 
- [Visual Studio Code](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-vsc.html)
- [IntelliJ](https://education.launchcode.org/java-web-development/chapters/introduction-and-setup/setup.html#install-the-jdk)

## Steps to Get Set Up Locally
You're making progress! Now let's get you set up locally so that you can start coding. Follow these steps in order!

1. Fork this repository
2. Clone and open the project in IntelliJ
  
		Note: If your project is not indexing, you can trouble shoot with these steps. When it says Maven import detected, select import. You can alternatively open the project at pom.xml
3. Click setup Java JDK and choose Java 13
4. Open MySQL Workbench. You can view this video for a helpful walkthrough of a similar project: [Setting up a Persistent Database](https://education.launchcode.org/java-web-development/chapters/orm-part1/background.html)
5. Create a connection titled localhost
6. Create a schema(database) called collab_blog
7. Create a new user collab_blog and password
8. Nick and John will send you AWS S3 credentials. Reach out to them if you have not yet. 
9. Open Visual Studio Code
10. Navigate to Blog/client
11. Open a terminal in VS Code and type ng serve. Troubleshooting, You may need to type npm install --save-devkit/build-angular if you are getting an error
12. Open IntelliJ. 
13. Click on Add Configurations
14. On the left side, click Templates, then Application.
15. In the Environment Variables Section, add your environment variables
16. You'll have 9 env variables: 
	- DB_PORT
	- DB_HOST
	- DB_NAME
	- DB_USER
	- DB_PASSWORD
	- S3_ACCESS
	- S3_SECRET
	- S3_REGION
	- S3_BUCKET



## Community and Contributing
Jump into our Slack! There you will be able to connect with other LaunchCoders
and work through these challenges together. We encourage you to find a team of people to work with on these 
features. 

Read our Contributing guidelines: (*insert contiribution guidelines)

