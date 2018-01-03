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
    'Editing existing employee and saving': (browser) => {

        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name1)
        browser.click(selectors.eeList.ee1)
        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
            .click(selectors.contactCardInput.eeName)
            .clearValue(selectors.contactCardInput.eeName)
            .setValue(selectors.contactCardInput.eeName, data.goodData.name)
            .click(selectors.buttons.saveChanges)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name)
    },
    'testing cancel button reverts all changes': (browser) =>{

        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name1)
        browser.click(selectors.eeList.ee1)
        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
            .click(selectors.contactCardInput.eeName)
            .clearValue(selectors.contactCardInput.eeName)
            .setValue(selectors.contactCardInput.eeName, data.goodData.name)
            .click(selectors.buttons.cancelChanges)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name1)

    },
    'testing navigating away reverts all changes': (browser) =>{

        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name1)
        browser.click(selectors.eeList.ee1)
        browser.waitForElementVisible(selectors.eeList.ee1, 2000)
            .click(selectors.contactCardInput.eeName)
            .clearValue(selectors.contactCardInput.eeName)
            .setValue(selectors.contactCardInput.eeName, data.goodData.name)
            .click(selectors.eeList.ee10)
            browser.click(selectors.eeList.ee1)
        browser.expect.element(selectors.eeList.ee1).text.to.equal(data.goodData.name1)
    }
}