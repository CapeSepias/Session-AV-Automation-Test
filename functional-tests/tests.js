import { Selector } from 'testcafe' // first import testcafe selectors
const faker = require('faker')
const user = require("../fixtures/user.json")
const homePage = require("../pages/homePage")
const loginPage = require("../pages/loginPage")
const userDashboardPage = require("../pages/userDashboardPage")
const organizerDashboardPage = require("../pages/organizerDashboard")

fixture `GettingStarted`// declare the fixture
    .page `https://staging.hopin.com`  // specify the start page
    .beforeEach( async t0 => {
        await t0
            // .wait(8000)
            // .maximizeWindow()
            .click(homePage.loginLink())
            .typeText(loginPage.emailField(), user.emailAddress)
            .typeText(loginPage.passwordField(), user.password)
            .click(loginPage.loginButton())
            .expect(Selector(userDashboardPage.h1()).innerText).eql('Hello, ' + user.name)
    })
 
// create a test and place your code there
test('Create an Organization', async t1 => {
    await t1  
        .click(userDashboardPage.createOrganizationButton())
        .typeText(userDashboardPage.organizerNameField(), Math.random().toString(36).substring(2, 15))
        .typeText(userDashboardPage.organizerEmailField(), faker.internet.email())
        .click(userDashboardPage.hopinOrganizationButton())

})

test('Create an Event', async t2 => {
    await t2
        .click(userDashboardPage.hopinOrganizationButton())
        .click(organizerDashboardPage.createEventButton())
        .typeText(organizerDashboardPage.eventNameField(), Math.random().toString(36).substring(2, 15))
        .click(organizerDashboardPage.eventTypePublic())
        .click(organizerDashboardPage.createEventButton2())
})

test('Create a Session', async t3 => {
    await t3
        .click(userDashboardPage.hopinOrganizationButton())
        .wait(7000)
})