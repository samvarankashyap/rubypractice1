Project Phase 1
===============
 
Name: Samvaran Kashyap Rallabandi
---------------------------------

Student Id: 1001142545
----------------------
 
### a. What server framework did you choose and why?

I have choosen Ruby on rails as a server framework . Ruby on rails gives a MVC framework and comparitively it gives a easier learning curve for the scripting language developers . Further ROR has a framework similar to Django . 

 
### b. What client framework did you choose and why?

I have chosen Jquery as a client framework . Having been developer in javascript jquery is quiet easy frame work gives the developer to code in . 


###c. What aspect of the implementation did you find easy, if any, and why?
In the world of content delivery network jquery finds easiest way to integrate with any kind of framework .A simple script tag will do the trick for all the exteral libraries to be included.On the other hand Ruby on rails enforcing MVC framework makes the developers work easy generating code for all the screnarios so that the developer can concentrate on logical implemetation . Unlike other frameworks like node.js everything is to be written from the scratch.


###d. What aspect of the implementation did you find hard, if any, and why?
Though ruby on rails provides a good mvc framework , one has to understand the control flow completely inorder to develop rails further a pre-requsite knowledge of ruby is necessary . 


###e. What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?
Ruby on rails gives a wonderful option to specify the requirement specifications in a Gemfile . "bundle install" command prepares the server side environment .Moreover,  for the currentrequirement , we need not install any other external packages .
However on the client side instead of displaying raw html tables  bootstrap.js and bootstrap.css are integrated to style the existing webpages using CDN(content delivery network ). Thus thecurrent application does not need any other dependencies to be installed inorder to run the application .


###f. What Ubuntu commands are required to deploy and run your server?

The ubuntu commands required to deploy the application are as follows 

1. git clone https://github.com/samvarankashyap/rubypractice1.git
2. cd rubypractice1
3. bundle install
4. rake db:migrate
5. rake db:seed
6. rails s -b 0.0.0.0

