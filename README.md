# Hudl Login Test Suite

This project is designed to automate login tests for the Hudl recruitment task, using cypress and cucumber.

Cucumber is an automation framework for Behaviour-Driven Development. The specifications are written in plain text, which allows them to be easily understandable for all stakeholders and particularly for login scenarios, allows easier re-use and extension of test scenario.  

I decided to write this using Cypress / JavaScript due to it being a more familiar test automation framework to me.

## Structure

config.js file contains re-usable variables such as page objects and data.
Note: within this file, you will need to update the `DATA_PASSWORD` to a valid password corresponding to the user referenced in the feature files below, which will also need to be updated with the user's email address within the `<add user here>` examples before execution. 

Feature Files 

The tests as part of a cucumber feature file located in cypress > e2e > examples > login.feature, with the corresponding code located in cypress >> e2e >> login >> login.js.  

These consist of the following scenarios which can be extended further by adding additional parameters into them, such as users or URLs.

Feature: Login

    I want to Login to Hudl

    Scenario Outline: I can login to Hudl 
        Given I am on a <URL>
        When I click login button in nav
        Then I am navigated to a login page
        And I login as <User>
        Then I am logged in successfully
    
        Examples:
            |URL|User|
            |"https://www.hudl.com/en_gb/"| "<add user here>" |

    Scenario Outline: I can logout of Hudl 
        Given I am on a <URL>
        When I am logged in to Hudl as <User>
        And I click the logout button 
        Then I am successfully logged out
        Examples:
            |URL|User|
            |"https://www.hudl.com/en_gb/"| "<add user here>" |

      Note: this scenario is currently failing due to issues interacting with the nav menu item.


    Scenario Outline: I receive invalid login details message when entering an invalid email address
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        Then invalid username error is displayed
    
        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "invaliduser" |
                  

    Scenario Outline: I receive invalid login details message when entering an invalid credentials
        Given I am on a <URL>
        When I click login button in nav
        And I login as <User> with an invalid credentials
        Then invalid email or password error is displayed
    
        Examples:
            
            |URL|User|
             | "https://www.hudl.com/en_gb/" | "doesnotexist@email.com" |
          
    Scenario Outline: I can request password reset
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        And I click on forgot your password link
        Then I am navigated to Reset Password page

        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "<add user here>" |
            
    Scenario Outline: I can edit my username once entered
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        And I edit my username
        Then I am navigated to a login page

        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "<add user here>" |

## Install Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is installed automatically with Node.js.

## Install

- clone repo https://github.com/your-username/hudl-login-test
- run `npm i`

---

**NOTE:** If you've already cloned this repo, you will need to add/update dependencies via ...

- `git pull`
- run `npm i`

---

## Run Tests

- run `npm start` - this opens the cypress app to run tests manually
- run `npm test` - this runs the entire test suite in terminal/command line and will run anything tagged with `@regression`

## Observations / Notes
- Inconsistent use of element identifiers meant I had to use a mixture of specific data-qa-id values, class names and ids. 
- Error messages differ between invalid email address and password entered. This is a potential security risk and vulnerability to brute force attacks, allowing bad actors to determine valid users of the system. 
- I experienced challenges interacting with the nav menu to verify a logged out state, as it seemed to have hidden parent elements preventing me from clicking on the menu. This resulted in the final step for the second scenario in the feature file failing.

