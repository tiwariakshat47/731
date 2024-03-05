COMMANDS to start installing expo project and setting everything up

- npm install -g expo-cli

  - This sets up expo commands in terminal
  - Close and reopen terminal if it doesnt start
  - If doesn’t work, try sudo npm install -g expo-cli for Admin installation

- INSTALLING HOMEBREW:

  - https://brew.sh/
  - You need to install homebrew in order to install npm commands and watchman
  - Install homebrew first
  - Then run these commands
    brew install node
    brew install watchman

- Creating the expo project:
  Two ways of making an expo project:

  1. Create an Expo account, and manually make a project on the website

     - Should tell you directions on how to link the project
     - npm install --global eas-cli (if doesn’t work try using sudo in front)
       - This command allows you to use eas commands
     - npx create-expo-app <Your app in expo>
       - This creates the directory on your local machine
     - cd <your app name>
       - Goes into directory
     - eas init <id number>
       - There should be a long number here
       - If you run into an error with EAS, specifically number 13, run this:
         - sudo chown -R 501:20 "/<Users>/<Directory>/.npm"
         - Should be shown in eas error statement

  2. Video’s way
     - expo init <name of your desired app>
       - You will be given with a prompt for template
     - Pick blank template
       - You will then be given steps similar to first way
       - Very straightforward from here
