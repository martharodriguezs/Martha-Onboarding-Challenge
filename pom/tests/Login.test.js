
import loginPage from '../pages/LoginPage'
import { CREDENTIALS, INVALIDCREDENTIALS, URLS } from '../data/Constants'
import taskPage from '../pages/TaskPage'

fixture('Login feature test')
    .page`${URLS.LOGIN_URL}`

test('As a user, i should not be able to log in successfully when login form user and password are empty', async (t) => {
    await t 
        .click(loginPage.loginButton)
        .expect(loginPage.labelUserPasswordEmpty.exists).ok()    
})

test('As a user, i should not be able to log in successfully when providing only the password', async (t) => {
    await loginPage.submitLoginForm(" ", CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(loginPage.labelUserEmailEmpty.exists).ok()     
})

test('As a user, i should not be able to log in successfully when providing invalid credentials', async (t) => {
    await loginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.INVALIDUSERNAME, INVALIDCREDENTIALS.INVALID_USER.INVALIDPASSWORD)
    await t.expect(loginPage.labelWrongCredentials.exists).ok()    
})

test('As a user, i should be able to log in successfully by providing valid credentials', async (t) => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(taskPage.title.exists).ok   
})