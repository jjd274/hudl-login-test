# HUDL Login Test Suite

This project is designed to automate login tests for the Hudl recruitment task, using Cypress and Cucumber.

Cucumber is an automation framework for Behavior-Driven Development. The specifications are written in plain text, which allows them to be easily understandable for all stakeholders. 

## Structure

config.js file contains re-usable variables such as page objects and data. 

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is installed automatically with Node.js.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jjd274/hudl-login-test/
   cd hudl-login-test
   npm install

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
