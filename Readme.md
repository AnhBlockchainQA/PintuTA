# Pintu Technical Assessment

## UI_Test_Flows

* Test Mobile UI, I use the **maestro** tool
link https://github.com/mobile-dev-inc/maestro

*All test cases are saved in a folder named **auth** with the file extension _.yaml_

* inside the .yaml file will contain test cases, test steps, test elements I inspect from the mobile interface of the app

*Besides, I have written 2 scripts located in the UI_testtFlows/scripts folder to generate test data for **login** and **registration** functions.
To run all test cases we do the following

`cd UI_testFlows/auth`

* and run the following command `maestro test main.yaml`

* if you want to run any test flow, just simply change name file _main.yaml_ to any test flow others
for example: `maestro test ValidData-Register-Function.yaml`
and finally to export the report we can run the following command
```maestro test --format junit UI_testFlows/auth``` ref https://maestro.mobile.dev/cli/test-suites-and-reports
* please see how i run it with this video: https://youtu.be/jvWBlF_qybI


## API_Test_Flows

* API testing, I get it in the directory API_test Flows/tests

* I use **playwright** test tool to run tests and manage reports see more on this website https://playwright.dev/docs/api-testing

* I write 2 test cases inside the tests folder corresponding to 2 methods Get and Post as required

* run the test as follows:

 _cd API_testFlows/tests_

then 

 _npx playwright test_ to run all test cases with filename containing *.spect.js

* Or _npx playwright test testcases_filename_ to run each file

* And finally to display the report

you use this command _npx playwright show-report_

* please watch this video to see me explain and demo: https://www.youtube.com/watch?v=jvWBlF_qybI&t=252s

