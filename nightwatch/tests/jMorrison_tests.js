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
    "test search function": (browser) => {
    browser.click(selectors.eeList.search)
    func.enterValue(selectors.eeList.search, "Lou White")
    browser.expect.element(selectors.eeList.ee8).to.be.present

    },
    
        }