Project Phase 1
===============
 
Name: Samvaran Kashyap Rallabandi
---------------------------------

Student Id: 1001142545
----------------------
 
### a. What server framework did you choose and why?

I have chosen Ruby on rails as a server framework. Ruby on rails gives a MVC framework and comparatively it also has a steep learning curve for the scripting language developers. Further ROR has a framework similar to Django . Ruby has in built ORM model that makes the database integration and maintenance easy. The feature I liked the most is application dependency management using Gem file. One can just add the dependencies to a gem file and need not bother about the pre-requisites software to be installed to deploy the web application.  

 
### b. What client framework did you choose and why?

I have chosen Jquery as a client framework. Jquery acts a shorthand notation of javascript . Jquery also has a many inbuilt functions which are ready to use. It is also easy to integrate jquery into any of the frontend frameworks in future without conflicting .One can easily extend the existing library code without understanding any jargon of frameworks.   


###c. What aspect of the implementation did you find easy, if any, and why?
In the world of content delivery network jquery finds easiest way to integrate with any kind of framework .A simple script tag will do the trick for all the external libraries to be included. On the other hand Ruby on rails enforcing MVC framework makes the developers work easy by generating code for all the common scenarios so that the developer can concentrate on logical implementation. Unlike other frameworks like node.js everything is to be written from the scratch.


###d. What aspect of the implementation did you find hard, if any, and why?
Though ruby on rails provides MVC framework, one has to understand the control flow completely in order to develop rails. Moreover, a pre-requisite knowledge of ruby is necessary .Learning ruby one can take full advantage of rails ,  whereas others have to learn ruby first in order to develop in the framework . 


###e. What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?
Ruby on rails gives a option to specify the requirement specifications in a Gemfile . "bundle install" command prepares the server side environment . Moreover, for the current requirement ,we need not install any other external packages .
However on the client side instead of displaying raw html tables bootstrap.js and bootstrap.css are integrated to style the existing webpages using CDN (content delivery network). Thus the current application does not need any other dependencies to be installed in order to run the application.


###f. What Ubuntu commands are required to deploy and run your server?

The ubuntu commands required to deploy the application are as follows 

1. git clone https://github.com/samvarankashyap/rubypractice1.git
2. cd rubypractice1
3. bundle install
4. rake db:migrate
5. rake db:seed
6. rails s -b 0.0.0.0
