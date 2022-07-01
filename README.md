## Wizeline Onboarding Challenge

Project Structure

    ├── Martha Onboarding Challenge
    ├── node_modules      
    ├── tests            
    │      └── pom   
    │           ├── data
    │           ├── pages
    │           └── tests
    │      └── Postman-Newman    
    └── README.md

## The following details are related to the FRONTEND and BACKEND Automation of the Todoist application. 

Tools used for automation

	•	Visual Code
	•	TestCafe
	•	Postman
	•	Newman

Tool used for CI

	•	Jenkins

Pre-requisites

	•	Npm
	•	Node js
	•	Browserstack
	•	Eslint

note: Tests for frontend and backend use JavaScript

## Automation environment setting up

1. Install Home-brew

   ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install Node.js in the system, this includes the node package manager know was npm.

   brew install node

3. Install Test Cafe:

   npm install - g testcafe

4. Install Browserstack

   npm install testcafe-browser-provider-browserstack

5. Create the following environment variables:

   export BROWSERSTACK_USERNAME="<BrowserStack Automate username>"

   export BROWSERSTACK_ACCESS_KEY="<BrowserStack Automate access key>"

6. Validate your code using eslint

   npx eslint ./pom

## Execute the tests
They will be executed at chrome as this has been specified in the package.json

1. Execute all the tests:

   npm run all tests

2. Execute specific test:

   npm run logintest

   npm run createtasktest

3. Execute the test in Headless mode:

   npm run logintestH

   npm run createtasktestH

4. Execute tests using Browserstack

   - Get the list of available operating system and version by using this command:
     
     npx testcafe -b browserstack

   - Execute the test in the desired environment(e.g.)

     npx testcafe "browserstack:chrome@102.0:OS X Big Sur" "./pom/tests/Login.test.js"

     npx testcafe "browserstack:chrome@102.0:OS X Big Sur" "./pom/tests/Createtasks.test.js"

## The following instructions are related to the BACKEND Automation of the Todoist application (API)

1. Install postman from:

   https://postman.com/downloads

2. Install Newman, first validate you have npm and node installed and then run the following command:

   npm install -g newman

4. Download the Postman collection and environment to the folder Postma-Newman found at Onboarding Challenge and execute this command from visual code:

   npm run apitest

## Continuos integration

1. Install Jenkins, follow the instructions found at: 

   https://jenkins.io/download for MacOS

   https://jenkins.io/doc/book/installing/#windows

2. Create the account and login to access the Manage Jenkins section and download the plugin nodejs

3. At Configure system->Global properties->check Environment variables option and add a new variable called "newman" and as value assign the path were newman can be found.
e.g. for a Mac will be kind of like: usr/local/lib/node_modules/newman

4. Go back to Manage Jenkins->Global tool configuration->Node js section->Node.js installations->give a name-> check install automatically-> add "newman" as Global npm packages to install->Save

5. Create a Jenkins project to run postman collection

   New Item->Enter a name ->Freestyle project->ok
   General->Build Environment->Check Provide Node and npm bin/folder to path and set NodeJs 
   Installation field as "NodeJs"

   Build->Add Build step->execute shell->type: 
   newman run ./Postman-Newman/Martha_Onboarding_Challenge.postman_collection.json -e ./Postman- 
   Newman/ProjectList.postman_environment.json ->Save

6. Run the collection

- Click on Build Now - the first attempt will fail 
- Click on the Build -> Console Output -> Copy the path specific at Building in workspace -> Go to that folder on your machine -> add in the collection and environment files ->click on Build Now -> Validate at Console Output to see if tests have passed or failed.