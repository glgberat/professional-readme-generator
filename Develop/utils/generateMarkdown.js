// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license=="None") {
    return " "; }
return "https://img.shields.io/badge/License-"+license+"-blue.svg";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=="None") {
    return " "; }
return "https://opensource.org/licenses/"+license;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license=="None") {
    return " "; }
    return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents: 
  - [License](#license)
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Test](#test)
  - [GitHub](#github)
  - [Email](#email)
  - [Contributors](#contributors)
## License:
[![License:${renderLicenseSection(data.license)}](${renderLicenseBadge(data.license)})]${renderLicenseLink(data.license)})
## Description:
${data.description}
## Installation Instructions: 
${data.installation}
## Test: 
To test type ${data.test} into the terminal
## Github: 
Check out more project on my Github at https://github.com/${data.gitHub}
## Email:
If you have any question please feel free to email me at ${data.email}
## Contributors:
${data.contributors}



`;
}

module.exports = generateMarkdown;
