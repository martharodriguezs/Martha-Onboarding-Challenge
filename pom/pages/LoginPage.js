import { Selector, t } from "testcafe"

class LoginPage{
    constructor(){
        this.usernameInput = Selector ('#labeled-input-1')
        this.passwordInput = Selector ('#labeled-input-3')
        this.loginButton = Selector ('._09c23660').withText('Log in')
        this.labelWrongCredentials = Selector('._2282cb83')//.withExactText('Wrong email or password.')
        this.labelUserPasswordEmpty = Selector('.jMjOg3K')//.withExactText('Please enter a valid email address.')
        this.labelUserEmailEmpty = Selector('.jMjOg3K').withText('Please enter a valid email address.')
        this.labelPasswordEmpty = Selector('.jMjOg3K').withText('Passwords must be at least 8 characters long.')
    }

    async submitLoginForm(username,password){
        await t
        .typeText(this.usernameInput,username)
        .typeText(this.passwordInput,password)
        .click(this.loginButton)
    }
}

export default new LoginPage