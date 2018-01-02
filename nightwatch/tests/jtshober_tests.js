const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can load the app in a new browser window, pause for 5 seconds, and then close the application': browser => {
        browser
        browser.url('http://localhost:3000')
            .pause(5000)
        browser.end()
        console.log('App was sucessfully loaded, then closed.')
    },
    'Testing that a(n) employee card contains 5 specific pieces of information': browser => {
        browser
            .click(selectors.eeList.ee1)
        browser.expect.element(selectors.contactCardInput.eeName).value.to.contain('Bernice Ortiz')
        browser.expect.element(selectors.contactCardInput.eePhone).value.to.contain('4824931093')
        browser.expect.element(selectors.contactCardInput.eeEmail).value.to.contain('b_ortiz@gmail.com')
        browser.expect.element(selectors.contactCardInput.eeTitle).value.to.contain('CEO')
        browser.expect.element(selectors.contactCardHeaders.eeID).text.to.contain('1')

    }

}