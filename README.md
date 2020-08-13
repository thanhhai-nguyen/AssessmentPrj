This is a Java with Cucumber project. Test case is written with BDD format.

Pre-require:
Machine must be pre-installed:
- Java JDK
- Eclipse IDE (or other IDE support Java)
- Eclipse pre-install cucumber plugin [MUST] (install guide: https://www.toolsqa.com/cucumber/install-cucumber-eclipse-plugin/#:~:text=Steps%20to%20follow%3A,Click%20OK.)

How to run:
1. Download/Clone project from Github
2. Import project into Eclipse
3. Left click on project name -> run as -> maven install (to update missing dependency)
4. How to run:
  4.1. Left click on project name -> Run as -> JUnit
  4.2. Open "features" folder -> testcase.feature  -> Left click -> Run as -> Cucumber feature
5. Verify result of JUnit in Eclipse (user can view report in HTML form by: open project folder -> target -> html -> index.html)


NOTE: this auto is run with Chromedriver and Google Chrome version 84. If your computer is run in newer Chrome version then please visit: https://chromedriver.chromium.org/ download suitable driver version and OVERRIDE on existed chromedriver of project.


Mechanism: 
- Auto will read test case in "feature" folder and read action in "stepDefinition" folder. If you want to change process or folder name, please update new name in "runner"-> "TestRunner.java" file
- All action code will locate in "action" folder
- All testcase step and handler is location is "stepDefinition" folder
