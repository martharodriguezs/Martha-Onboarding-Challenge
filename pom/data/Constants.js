import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/auth/login'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    }
}

export const INVALIDCREDENTIALS = {
    INVALID_USER: {
        INVALIDUSERNAME: 'abc@wize.com',
        INVALIDPASSWORD: 'Welcome98765'
    }
}

export const NUMBERTASKS = {
    NUMBER_TASKS: {
        NUMBEROFTASKS: '5'
    }
}