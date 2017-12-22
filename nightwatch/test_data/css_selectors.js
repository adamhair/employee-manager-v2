module.exports = {
    //These are the selectors found on the main page of the app. Headers indicate non-editable fields.
    pageHeaders: {
        pageTitle: 'span[class="titleText"]',
        noEmployee: 'p[id="noEmployee"]',
        eeList: 'ul[class="listContainer"]',
    },
    //These reference the search functionality, as well as each employee in the employee list. Note: the 'Add Employee' in the list is actually a button, and will be listed as such.
    eeList: {
        search: 'input[name="searchBox"]',
        ee1: 'li[name="employee1"]',
        ee2: 'li[name="employee2"]',
        ee3: 'li[name="employee3"]',
        ee4: 'li[name="employee4"]',
        ee5: 'li[name="employee5"]',
        ee6: 'li[name="employee6"]',
        ee7: 'li[name="employee7"]',
        ee8: 'li[name="employee8"]',
        ee9: 'li[name="employee9"]',
        ee10: 'li[name="employee10"]'

    },
    //These reference the non-editable selectors found on an open contact card.
    contactCardHeaders: {
        eeID: 'span[name="employeeID"]',
        eeTitle: 'p[name="employeeName"]',
        eeName: 'span[name="nameLabel"]',
        eePhone: 'span[name="phoneLabel"]',
        eeEmail: 'span[name="emailLabel"]',
        eeTitle: 'span[name="titleLabel"]',
    },
    //These reference the EDITABLE selectors of an open contact card.
    contactCardInput: {
        eeName: 'input[name="nameEntry"]',
        eePhone: 'input[name="phoneEntry"]',
        eeEmail: 'input[name="emailEntry"]',
        eeTitle: 'input[name="titleEntry"]'
    },
    //These are all clickable buttons found in the program.
    buttons: {
        clearSearch: 'button[name="clearSearch"]',
        addEmployee: 'li[name="addEmployee"]',
        saveChanges: 'button[name="save"]',
        cancelChanges: 'button[name="cancel"]',
        deleteChanges: 'button[name="delete"]'
    }

}
