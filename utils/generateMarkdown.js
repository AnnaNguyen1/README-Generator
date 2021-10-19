// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "Apache":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
}
// Can it be written in an arrow fn?
// renderLicenseSection = (license) => {
//   if (license === "None") {
//     return "";
//   } else {
//     return `## License
//     This project is licensed under the ${license} license.`;
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table Of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  To install necessary dependencies, run the following command: 
  \u0060\u0060\u0060bash
  ${data.installinstructions}
  \u0060\u0060\u0060

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contriguidelines}

  ## Test Instructions
  To run tests, run the following command: 
  \u0060\u0060\u0060bash
  ${data.testinstructions}
  \u0060\u0060\u0060

  ${renderLicenseSection(data.license)}

  ## Questions 
  If you have any questions about the repo, please open an issue or contact me directly at ${
    data.email
  }. You can find more of my work <a href="https://github.com/${
    data.github
  }" target="_blank">here</a>.
`;
}

module.exports = generateMarkdown;
