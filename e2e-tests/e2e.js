import { Selector } from 'testcafe' // first import testcafe selectors
import allAccessSessionsPage from '../pages/allAccessSessionsPage'
const user = require("../fixtures/user.json")
const homePage = require("../pages/homePage")
const loginPage = require("../pages/loginPage")
const allAccessReceptionPage = require("../pages/allAccessReceptionPage")

fixture `GettingStarted`// declare the fixture
    .page `https://staging.hopin.com/events/all-access`  // specify the start page
    .beforeEach( async t0 => {
        await t0
            .maximizeWindow() 
            .click(homePage.allAccessEventLogin())        
    })

test('First User Joins the Session', async t1 => {
    await t1
        .typeText(loginPage.emailField(), user.emailAddress)
        .typeText(loginPage.passwordField(), user.password)
        .click(loginPage.loginButton())
        .wait(5000).click((allAccessReceptionPage.sessionsTab()))
        .click((allAccessSessionsPage.testSession()))
        .wait(7000).click((allAccessSessionsPage.shareAV()))
        .click((allAccessSessionsPage.selectDevices()))
        .wait(20000)
})
