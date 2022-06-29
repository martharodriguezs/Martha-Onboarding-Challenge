
import loginPage from '../pages/LoginPage'
import { CREDENTIALS, NUMBERTASKS, URLS } from '../data/Constants'
import taskPage from '../pages/TaskPage'

fixture('Login feature test')
    .page`${URLS.LOGIN_URL}`

test('As a user, i should be able to create a task', async () => {
    await 
    loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD) 
    taskPage.createTask(NUMBERTASKS.NUMBER_TASKS.NUMBEROFTASKS);
})