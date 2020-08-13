Pre-require:
Machine must be pre-installed:
- Java JDK
- Eclipse IDE (or other IDE support Java)
- Eclipse pre-install cucumber plugin (install guide: https://www.toolsqa.com/cucumber/install-cucumber-eclipse-plugin/#:~:text=Steps%20to%20follow%3A,Click%20OK.)

How to run:
1. Download/Clone project from Github
2. Import project into Eclipse
3. Left click on project name -> run as -> maven install (to update missing dependency)
4. How to run:
  4.1. Left click on project name -> Run as -> JUnit
  4.2. Open "features" folder -> testcase.feature  -> Left click -> Run as -> Cucumber feature
5. Verify result of JUnit in Eclipse (user can view report in HTML form by: open project folder -> target -> html -> index.html)


NOTE: this auto is run with Chromedriver and Google Chrome version 84. If your computer is run in newer Chrome version then please visit: https://chromedriver.chromium.org/ download suitable driver version and OVERRIDE on existed chromedriver of project.
