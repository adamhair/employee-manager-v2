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
    'checking search clear button': browser => {
        browser
        .clearValue(selectors.eeList.search)
        .setValue(selectors.eeList.search, 'Bernice')
        .pause(20000)
        .click(selectors.buttons.clearSearch)
        .pause(10000)
    }
        }