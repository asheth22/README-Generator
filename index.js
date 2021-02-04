//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const axios = require('axios');

// Questions to be prompted to the user
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'githubUserName',
      message: 'What is your GitHub Username',
    },{
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What your project description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter application usage information',
    },    
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contrinuted to the project?s',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter testing information',
    },
    {
      type: 'checkbox',
      message: 'Please select license from the list',
      name: 'license',
      choices: ['APache', 'BSD', 'MIT', 'GNU'],
    },    
    {
      type: 'input',
      name: 'email',
      message: 'What is your email',
    },
  ]);

  // Obtain github user info using external API
async function getUserinfo(user) {
    
    try {
        const response = await axios      
      
        .get(`https://api.github.com/users/${user}`);
      return response.data;
    

      } catch (error) {
        console.log(error);
      }
  }

// async function to initialize app
async function init() {
  console.log("Ready to help you generate a README.ms file for your project!!");
// calling functions to get user respomses and github info
  try {
    const answers = await promptUser();    
    const gitInfo = await getUserinfo(answers.githubUserName);   
    const avatar = gitInfo.avatar_url;     
    // calling function to generate and readme content and create file
    const readMe = generateMarkdown(answers, avatar);    
   const readMeFile =  await fs.writeFileSync("GeneratedREADME.md", readMe);
   console.log("README file is successfully created!");
    
}catch(err) {
    console.log(err);    
}

};
// Function call to initialize app
init();
