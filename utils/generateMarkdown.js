// returns the badge for the license selected
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data['licenseType']) {
    case 'none': 
      return ``;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0' :
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License' :
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'BSD 3-Clause "New" or "Revised" License' :
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0' :
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal' :
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License 2.0' :
      return `[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
    case 'GNU Affero General Public License v3.0' :
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
    case 'GNU General Public License v2.0' :
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GNU Lesser General Public License v2.1' :
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0' :
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense' :
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default: 
      console.log("Licensing determination error");
      return("Licensing determination error"); 
  }
}

// returns a link to the selected license
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data['licenseType']) {
    case 'none': 
      return ``;
    case 'Apache License 2.0':
      return `Apache License 2.0
(https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0' :
      return `GNU General Public License v3.0
(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License' :
      return `MIT License
(https://opensource.org/licenses/MIT)`;
    case 'BSD 3-Clause "New" or "Revised" License' :
      return `BSD 3-Clause "New" or "Revised" License
(https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0' :
      return `Boost Software License 1.0
(https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal' :
      return `Creative Commons Zero v1.0 Universal
(http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License 2.0' :
      return `Eclipse Public License 2.0
(https://opensource.org/licenses/EPL-2.0)`;
    case 'GNU Affero General Public License v3.0' :
      return `GNU Affero General Public License v3.0
(https://www.gnu.org/licenses/agpl-3.0.en.html)`;
    case 'GNU General Public License v2.0' :
      return `GNU General Public License v2.0
(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GNU Lesser General Public License v2.1' :
      return `GNU Lesser General Public License v2.1
(https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0' :
      return `Mozilla Public License 2.0
(https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense' :
      return `http://unlicense.org/`;
    default:
      console.log("Licensing determination error");
      return("Licensing determination error");
  } 
}



// returns the license section of README
function renderLicenseSection(data) {

  if (data.licenseType === 'none') {
    return `## License\n\nNone.`;
  } else {
    return `## License`;
  }
}
  

// generates the markdown content for the README
function generateMarkdown(data) {


  return `# ${data.projectName}

${renderLicenseBadge(data)}

## Description

${data.projectDescription}

---

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#Contributing)

* [Questions](#Questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

---

## Usage

${data.usage}

---

${renderLicenseSection(data)}
${renderLicenseLink(data)}

---

## Contributing
${data.contributingToRepo}

---

## Questions
GitHub Profile: https://github.com/${data.gitHubUsername}

Email Address: ${data.emailAddress}
`;
}



// make the generateMarkdown function available 
module.exports = generateMarkdown;
