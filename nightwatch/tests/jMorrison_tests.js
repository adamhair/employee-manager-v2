const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    // beforeEach is a type of hook, in which the following tests all start from this point, and will load a fresh app prior to each test executing.
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    // Similar to 'beforeEach', this hook runs after the successful completetion of each test.
    after: browser => {
        browser.end()
    },
    "test search function": (browser) => {
        browser.click(selectors.eeList.search)
        func.enterValue(selectors.eeList.search, "Lou White", browser)
        browser.expect.element(selectors.eeList.ee8).to.be.present
        browser.expect.element(selectors.eeList.ee4).to.not.be.present
    },
    "test clear button for search function": (browser) => {
        browser.click(selectors.eeList.search)
        func.enterValue(selectors.eeList.search, "Eve Sparks", browser)
        browser.expect.element(selectors.eeList.ee9).to.be.present
        browser.expect.element(selectors.eeList.ee1).to.not.be.present
        browser.click(selectors.buttons.clearSearch)
        browser.expect.element(selectors.eeList.ee1).to.be.present
    },
    'Modifying employee while search field is populated will update the results': (browser) => {
        browser.click(selectors.eeList.ee4)
        func.enterValue(selectors.eeList.search, 'Sp', browser)
        func.enterValue(selectors.contactCardInput.eeName, 'Teresa Spalding', browser)
        browser.click(selectors.buttons.saveChanges)
        browser.expect.element(selectors.eeList.ee4).to.be.present
    }
}
