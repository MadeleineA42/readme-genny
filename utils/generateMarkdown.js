// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

This project is licensed under the terms of the ${license} license. ${renderLicenseLink(license)}`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  // Generates the ReadMe content based on the users inputs 
  return `# ${data.title}
  ${licenseBadge}
  ## Description
  ${data.Description}

  ## License
  ${data.license}
  
  ## GitHub
  ${data.github}

  ## Name
  ${data.name}

  ## Email
  ${data.email}

  ## Dependencies
  ${data.require}

  ## Contributions
  ${data.contributions}

  ## Questions
  If you have any questions, please contact ${data.name} via [GitHub](https://github.com/${data.GitHub}) or email at ${data.email}.
  
`;
}

module.exports = generateMarkdown;