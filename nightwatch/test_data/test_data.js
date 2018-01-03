const selectors = require('../test_data/css_selectors')

module.exports = {
   //goodData is pulled from case scenarios 1-4 found in https://docs.google.com/spreadsheets/d/1wWavN8CVRF67_taRfpiuzYyp10XHs_WJX9s9BAP6xh0/edit#gid=0
   goodData: {
       name: 'Superman',
       phone: '8016783456',
       email: 'hello@gmail.com',
       title: 'COO',
       name1: 'Bernice Ortiz'
   },
   //badData is derived from the README.md file, partial boundary testing.
   badData: {
       name: 'asdfjklapoiurewq123456789nbmvcnbadfebad',
       phone: '123456789',
       email: 'asdf.',
       title: 'asdfjklapoiurewq123456789nbmvcnbadfebad'
   }
}
