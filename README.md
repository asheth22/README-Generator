# README-Generator

The application provides the user the ability to generate a README.md file. THe application prompts the user with questions about the project such as:
    > Project Title
    > Project Description
    > Installation information
    > License 
    > Usage
    > Contributing
The applciation uses an external API [github API](https://api.github.com/users) to retrieve github information about the user using their github user name

## Application Features

The application uses the inquirer package to prompt questions to the user 
THe application can be invoked using the node index.js command
The application collects the user information
The application retries user's github avatar and other info using an external API
The application creates a GenerateREADME.md file which contains:
    THe project title
    Project Description
    Table of contents linking to different sections within the file
    License badge
    User's github avatar
    Installation, Usage and Testing information

