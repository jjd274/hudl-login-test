Feature: Login

    I want to Login to Hudl

    @regression
    Scenario Outline: I can login to Hudl 
        Given I am on a <URL>
        When I click login button in nav
        Then I am navigated to a login page
        And I login as <User>
        Then I am logged in successfully
    
        Examples:
            |URL|User|
            |"https://www.hudl.com/en_gb/"| "<enter email address>" |

    @regression
    Scenario Outline: I can logout of Hudl 
        Given I am on a <URL>
        When I am logged in to Hudl as <User>
        And I click the logout button 
        Then I am successfully logged out
        Examples:
            |URL|User|
            |"https://www.hudl.com/en_gb/"| "<enter email address>" |



   @regression
    Scenario Outline: I receive invalid login details message when entering an invalid email address
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        Then invalid username error is displayed
    
        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "invaliduser" |
                  

    @regression
    Scenario Outline: I receive invalid login details message when entering an invalid credentials
        Given I am on a <URL>
        When I click login button in nav
        And I login as <User> with an invalid credentials
        Then invalid email or password error is displayed
    
        Examples:
            
            |URL|User|
             | "https://www.hudl.com/en_gb/" | "doesnotexist@gmail.com" |
          

    @regression
    Scenario Outline: I can request password reset
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        And I click on forgot your password link
        Then I am navigated to Reset Password page

        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "<enter email address>" |
            
    @regression
    Scenario Outline: I can edit my username once entered
        Given I am on a <URL>
        When I click login button in nav
        And I enter login details <User>
        And I edit my username
        Then I am navigated to a login page

        Examples:
            
            |URL|User|
            | "https://www.hudl.com/en_gb/" | "<enter email address>" |
