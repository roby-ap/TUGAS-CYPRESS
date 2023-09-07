// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goToLoginPage', () => {

    cy.get('#btn-make-appointment')
      .should('be.visible')
      .click()

    cy.url().should('include', '/profile.php#login')

})

Cypress.Commands.add('actionLogin', (username, password) => {

    cy.log(username)

    cy.log(password)

    cy.url().should('include', '/profile.php#login')

    cy.get('#txt-username')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      if (username != "") {
        cy.get('#txt-username')
            .type(username)
      }

    cy.get('#txt-password')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      if (password != "") {
        cy.get('#txt-password')
            .type(password)
      }

    cy.screenshot()

    cy.get('#btn-login').should('be.visible').click()

})

Cypress.Commands.add('checkLoginStatus', (url, element, textValidation) => {

    cy.log(url)

    cy.log(element)

    cy.log(textValidation)

    cy.url().should('include', url)

    cy.get(element).contains(textValidation)

    cy.screenshot()

})