const selectors = require('./css_selectors')
module.exports = {
    enterValue: (selector, input, browser) => {
        browser.clearValue(selector)
        browser.setValue(selector, input)
        browser.verify.value(selector, input)
    }
}