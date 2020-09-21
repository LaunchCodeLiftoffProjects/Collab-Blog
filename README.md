![LaunchCode](./blog/images/LaunchCode_ltblue%20copy.png)

<h1 style="text-align: center;">LaunchCode's Collab Blog</h1>


### Note: In order to get the most out of this project, read this README completely.


<h2 style="text-align: center;">About </h2>
LaunchCode provides and inclusive and supportive community to help get you
started on your first large open source project. 

This project is called Collab-Blog, and is a blog site where fellow LaunchCoders can
share blog posts that cover a wide range of topics. Similar to [Medium](https://medium.com/),
Collab-Blog allows users to create new blogs and share them with other users!
Collab-Blog is a full stack web application written in 
Angular, Spring Boot, and MySQL. 


<h2 style="text-align: center;">Your Task</h2>
You are going to help us build this project! We have written many [user stories](https://education.launchcode.org/liftoff/modules/project/user-stories.html?highlight=user%20story) that you will help us complete. So first, let's give you a lay of the land. 


Github issues are a great way for our open source project to stay organized. We will include all new features, improvements and bugs in this section. Don't worry if it's intimidating when you first look at all the issues. They are set up in a way that you will be a pro in no time! Let's get started. 

1. Navigate to [Issues](https://github.com/LaunchCodeLiftoffProjects/Collab-Blog/issues). There you will see 
a few labels that we will use to give you an idea of what to expect with each Issue. For a deeper description of what these labels mean, you can look at their descriptions [here](https://github.com/LaunchCodeLiftoffProjects/Collab-Blog/labels).

2. Read through all the issues to get a good idea of what you'd like to 
tackle based on your interest and skillset. For your first contribution, we recommend you
trying out a 'good first issue' tag. Beyond that, have fun with it. This is a great way for you not only to expand your skills, but to build a fun project with other LaunchCoders. 

<h1 style="text-align: center;">How To Get Started</h1>

First things first, join the slack channel #open-source-project-work in the LaunchCode slack channel. There you'll be surrounded by other LaunchCoders working on this project. Once you do that, send a direct message to Nick Rafferty and John Woolbright letting them know that you're interested in working on the project. 

Next, for this project, you will need MySQL with MySQL Workbench, Java 13, Node, Terminal and Angular installed locally. 

<h3 style="text-align: center;">But wait... that sounds like a lot. How do I get all of those installed?!</h3>



We're here to help. If you're one of our students who completed CoderGirl's Web Development or Java track, or an LC101 graduate, you already have everything you need installed. If you aren't no worries, here are all the links you need to get your computer set up for this project:

## Installations
- [Node](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-node.html) (Also installs NPM cli)
- [Terminal](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-terminal.html)
- [MySQL with MySQL Workbench](https://education.launchcode.org/java-web-development/appendices/sql-install.html)
- [Java](https://education.launchcode.org/java-web-development/chapters/introduction-and-setup/index.html)

#### Optional Installations
You are welcome to use any code editor that you prefer, but we highly recommend you use Visual Studio Code when working with Angular and IntelliJ when working with Spring Boot. 
- [Visual Studio Code](https://education.launchcode.org/intro-to-professional-web-dev/appendices/installing-software/setting-up-vsc.html)
- [IntelliJ](https://education.launchcode.org/java-web-development/chapters/introduction-and-setup/setup.html#install-the-jdk)


<h3 style="text-align: center;">Take a little break, you've made it through a lot!</h3>

****

<h2 style="text-align: center;">Steps To Get Set Up Locally</h2>
You're making progress! Now let's get you set up locally so that you can start coding. **Make sure to follow these steps in order.**

<h3 style="text-align: center;">Github Setup</h3>

1. Fork this repository (in the top right corner)
2. Clone and open the project in IntelliJ
```
Note: If your project is not indexing, you can trouble shoot with these steps. When it says Maven import detected, select import. You can alternatively open the project at pom.xml
```


<h3 style="text-align: center;">Java and MySQL Setup</h3>


1. Click setup Java JDK and choose Java 13
2.  Open MySQL Workbench. You can view this video for a helpful walkthrough of a similar project: [Setting up a Persistent Database](https://education.launchcode.org/java-web-development/chapters/orm-part1/background.html)
3.  Create a new connection. Make sure to name your connection **localhost**
4.  Create a schema called collab_blog
5.  Create a new user collab_blog and a password you can remember for this use
 

<h3 style="text-align: center;">Angular Setup</h3>


1. Nick and John will send you AWS S3 credentials. Reach out to them if you have not yet. 
2. Open Visual Studio Code
3. Open a terminal in VS Code and navigate to Collar-Blog/client. This is where your angular app will live. 
4. Type ng serve. You should see the angular app successfully compiling to localhost:4200. 


```
 Troubleshooting, You may need to type npm install --save-devkit/build-angular if you are getting an error
```


<h3 style="text-align: center;">Configuration</h3>


1. In IntelliJ, click on Add Configurations
2. On the left side, clickT**Templates**, then **Application**.
3. In the Environment Variables Section, add your environment variables
4. You'll have 9 env variables: 
	- DB_PORT
	- DB_HOST
	- DB_NAME
	- DB_USER
	- DB_PASSWORD
	- S3_ACCESS
	- S3_SECRET
	- S3_REGION
	- S3_BUCKET

For each environment variable, type in your value for each of the keys. For example, if you followed along with the above steps, your configuration will look something like this: 

| Name       | Value     |
| ----------- | ----------- |
| DB_HOST      | localhost      |
| DB_PORT      | 3308      |
| DB_NAME      | collab-blog      |
| DB_USER      | collab-blog     |
| DB_PASSWORD      | your password      |
| S3_SECRET      | your AWS secret key      |
| S3_ACCESS     | your AWS access key     |
| S3_REGION    | your AWS region     |
| S3_BUCKET    | your AWS bucked     |



Etc. Note: This part is a little tricky so reach out to Nick and John if you are having any difficulty getting your local environment configured. 

<h3 style="text-align: center;">Running Your Project</h3>


1. If you haven't already, open a terminal in VS Code and navigate to Collar-Blog/client. This is where your angular app will live. Type ng serve. You should see the angular app successfully compiling to localhost:4200. 
2. In IntelliJ, run the main application with Spring Boot Run. 

## Community and Contributing
Jump into our Slack! There you will be able to connect with other LaunchCoders
and work through these challenges together. We encourage you to find a team of people to work with on these 
features. 


