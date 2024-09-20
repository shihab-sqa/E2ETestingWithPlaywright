# SauceDemo Playwright Automation Suite
## This project automates testing for the SauceDemo application using Playwright. It includes test cases for:

Sorting functionality on the "All Items" page.
Price sorting (High to Low) on the "All Items" page.
Cart and Checkout functionality.
Automated visual regression tests.
Automated accessibility tests.
Table of Contents
Prerequisites
Setup Instructions
Running Tests
Headed Mode
Headless Mode
Visual Tests
Generating Reports
Capturing Video Recording
Sample Execution Logs


#Prerequisites
Node.js: Make sure you have Node.js (>= v16) installed. Download Node.js.
Playwright: Playwright installs its own browsers (Chromium, Firefox, and WebKit). You can download and install browsers using the Playwright CLI.


#Dependencies
After cloning the repository, you need to install the dependencies. Run the following command:
npm install

#Setup Instructions
Clone the Repository:
git clone https://github.com/your-username/sauce-demo-playwright.git
cd sauce-demo-playwright
Install Playwright and Other Dependencies: Playwright will install the required browsers automatically. Run the following command:

npm install
npx playwright install


#Running Tests
Headed Mode
You can run tests in headed mode (where the browser opens and runs the tests visibly).

npx playwright test --headed
Headless Mode
To run the tests in headless mode (without opening the browser), use the following command:
npx playwright test



#Generating Reports
Playwright supports generating test reports in different formats, including HTML and JSON. To generate an HTML report after running the tests:

npx playwright show-report


#Capturing Video Recording
Headed Mode Video Recording:
To record the browser's interaction in headed mode, configure the Playwright test runner to enable video recording. Add the following snippet to your playwright.config.js file:

use: {
    video: 'on',  // Enable video recording
    headless: false,  // Run tests in headed mode




#Headless Mode Video Recording:
To capture video in headless mode, modify the playwright.config.js:


    video: 'on',  // Enable video recording
    headless: true,  // Run tests in headless mode




