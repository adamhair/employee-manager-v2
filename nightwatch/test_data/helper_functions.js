<<<<<<< HEAD
const selectors = require('./css_selectors')
module.exports = {
    enterValue: (selector, input, browser) => {
        browser.clearValue(selector)
        browser.setValue(selector, input)
        browser.verify.value(selector, input)
=======
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    enterValue: (selector, data, browser) => {
        browser
        .clearValue(selector)
        .setValue(selector, data)
        .verify.value(selector, data)
>>>>>>> master
    }
}