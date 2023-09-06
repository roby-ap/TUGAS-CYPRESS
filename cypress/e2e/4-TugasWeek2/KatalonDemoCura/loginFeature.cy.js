describe('template spec', () => {

  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1536, 960)

    cy.visit('')

    Cypress.on('uncaught:exception', (err, runnable) => {  
      return false  
    })

  })

  it('Website can access', () => {

    cy.visit('')

    Cypress.on('uncaught:exception', (err, runnable) => {  
      return false  
    })

    cy.get('h1').should("have.text", "CURA Healthcare Service")

  }) 

  it('Login success', () => {
    cy.get('#btn-make-appointment')
      .should('be.visible')
      .click()
    cy.get('#txt-username')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('John Doe')
    cy.get('#txt-password')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('ThisIsNotAPassword')
    cy.screenshot()
    cy.get('#btn-login').should('be.visible').click()
    cy.get(':nth-child(3) > .col-sm-offset-3').should("have.text", "Healthcare Program")
    cy.screenshot()
  })

  it('Login fail, wrong password', () => {
    cy.get('#btn-make-appointment')
      .should('be.visible')
      .click()
    cy.get('#txt-username')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('John Doe')
    cy.get('#txt-password')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('ThisIsAPassword')
    cy.screenshot()
    cy.get('#btn-login').should('be.visible').click()
    cy.get('.text-danger').contains('Login failed!')
    cy.screenshot()
  })

  it('Login fail, wrong username', () => {
    cy.get('#btn-make-appointment')
      .should('be.visible')
      .click()
    cy.get('#txt-username')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('John Doe ')
    cy.get('#txt-password')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('ThisIsAPassword')
    cy.screenshot()
    cy.get('#btn-login').should('be.visible').click()
    cy.get('.text-danger').contains('Login failed!')
    cy.screenshot()
  })

  it.only('Login fail, empty credentials', () => {
    cy.get('#btn-make-appointment')
      .should('be.visible')
      .click()
    cy.screenshot()
    cy.get('#btn-login').should('be.visible').click()
    cy.get('.text-danger').contains('Login failed!')
    cy.screenshot()
  })

})