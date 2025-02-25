export default {
    //DOMAIN: Cypress.env('DOMAIN') || 'https://test-wr.pulselive.com/',
    HUDL_DOMAIN: Cypress.env('HUDL_DOMAIN') || 'https://www.hudl.com/en_gb/',
    ELEMENT_TIMEOUT: 10000,

    //DATA
    DATA_REGISTERED_USER: 'jonathanjldavies@gmail.com',
    DATA_PASSWORD: '',
    DATA_INVALID_PASSWORD:'invalidpassword',
    DATA_GOOGLE_URL: 'https://accounts.google.com/',
    DATA_FACEBOOK_URL: 'https://www.facebook.com/',
    DATA_APPLE_URL: 'https://appleid.apple.com/',

    //LOGIN ELEMENTS
    HUDL_USERNAME: '[id = "username"]',
    HUDL_PASSWORD: '[id= "password"]',
    HUDL_CONT: '[class="c574b8c0d"]',
    HUDL_USERNAME_ERROR: '[id="error-element-username"]',
    HUDL_CREDENTIALS_ERROR: '[id="error-element-password"]',
    HUDL_GLOBAL_NAV: '[class="hui-globalnav__group"]',
    HUDL_NAV_USERNAME:'[class ="hui-globaluseritem__display-name"]',
    HUDL_NAV_USER_EMAIL: '[class = "hui-globaluseritem__email"]',
    HUDL_NAV_USER_MENU: '[.hui-globaluseritem__display-name]',
    NAV_LOGIN: '[data-qa-id="login-select"]',
	HUDL_LOGIN: '[data-qa-id="login-hudl"]',
	HUDL_NAV_LOGOUT: '[data-qa-id="webnav-usermenu-logout"]',
    HUDL_TEAM_SWITCHER :'[class="hui-primaryteamswitcher__display-name"]',
    HUDL_FORGOT_PASSWORD: '[class="cdf6f7df0 c02944604 cd0a55bf0"]',
    HUDL_EDIT_USERNAME: '[data-link-name="edit-username"]',
    HUDL_APPLE_LOGIN: '[.cf57ce839 > .c6d59f8c7]',
    HUDL_GOOGLE_LOGIN: '[data-provider="google"]',
    HUDL_FACEBOOK_LOGIN: '[data-provider="facebook"]',
    HUDL_APPLE_LOGIN: '[data-provider="apple"]',
}