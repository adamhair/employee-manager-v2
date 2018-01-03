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
    'Test remove employee function': (browser) => {
        browser.click(selectors.eeList.ee1)
        browser.click(selectors.buttons.deleteChanges)
        browser.acceptAlert()
        browser.expect.element(selectors.eeList.ee1).to.not.be.present
    },
    'Test add employee function with good data': (browser) => {
        browser.click(selectors.buttons.addEmployee)
        browser.click(selectors.contactCardInput.eeName)
        func.enterValue(selectors.addEmployee.eeName, 'Batman', browser)
        func.enterValue(selectors.contactCardInput.eePhone, '8012455687', browser)
        func.enterValue(selectors.contactCardInput.eeEmail, 'b@gmail.com', browser)
        func.enterValue(selectors.contactCardInput.eeTitle, 'QA Engineer', browser)
        browser.click(selectors.buttons.saveChanges)
        browser.expect.element(selectors.eeList.ee11).to.be.present
    }
}