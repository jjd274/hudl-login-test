# White Label UI Test Suite

This repository is a seed which contains the basic set up for browser testing with cypress and cucumber.
The sample test in this repository uses the Pulselive website.

## Install

- clone repo
- run `npm i`

---

**NOTE:** If you've already cloned this repo, you will need to add/update dependencies via ...

- `git pull`
- run `npm i`

---

## Run Tests

- run `npm start` - this opens the cypress app to run tests manually
- run `npm test` - this runs the entire test suite in terminal/command line and will run anything tagged with `@regression`

#### Run Tests via other tags

- run only tests with tag "smoke" `npx cypress run -e tags=@smoke`
- run only tests with tag "smoke" OR "regression" `npx cypress run -e tags=@smoke or @regression`
- run only tests with tag "smoke" AND "regression" `npx cypress run -e tags=@smoke and @regression`

#### Run Tests within folders or individual specs

- run only tests within folder `npx cypress run --spec 'cypress/e2e/examples'`
- run only one test `npx cypress run --spec 'cypress/e2e/examples/contact-us.feature'`

## Config variables

There is some default config inside the `./config.js` file which can be overwritten when running the `npm` tasks to run cypress.
All cypress config variables need to be prefixed with `CYPRESS_`. So overwriting a variable and starting the app would look like this (different environment): `CYPRESS_DOMAIN=https://dev.pulselive.com npm start`

## Currently available variables:

| Name   | Default                      | Description    |
| ------ | ---------------------------- | -------------- |
| DOMAIN | `https://www.pulselive.com/` | default domain |
