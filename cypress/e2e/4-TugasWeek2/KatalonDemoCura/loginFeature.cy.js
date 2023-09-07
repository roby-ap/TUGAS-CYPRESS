describe('template spec', () => {

  beforeEach(() => {
    
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

    cy.goToLoginPage()

    cy.fixture('dataTest.json').then((data) => {

      const dt = data;

      cy.actionLogin(dt.credentials[0].username, dt.credentials[0].password)

      cy.checkLoginStatus(dt.responses[0].url, dt.responses[0].element, dt.responses[0].text)

    })

  })

  it('Login fail, wrong password', () => {

    cy.goToLoginPage()

    cy.fixture('dataTest.json').then((data) => {

      const dt = data;

      cy.actionLogin(dt.credentials[1].username, dt.credentials[1].password)

      cy.checkLoginStatus(dt.responses[1].url, dt.responses[1].element, dt.responses[1].text)

    })

  })

  it('Login fail, wrong username', () => {

    cy.goToLoginPage()

    cy.fixture('dataTest.json').then((data) => {

      const dt = data;

      cy.actionLogin(dt.credentials[2].username, dt.credentials[2].password)

      cy.checkLoginStatus(dt.responses[1].url, dt.responses[1].element, dt.responses[1].text)

    })

  })

  it('Login fail, empty credentials', () => {

    cy.goToLoginPage()

    cy.fixture('dataTest.json').then((data) => {

      const dt = data;

      cy.actionLogin("", "")

      cy.checkLoginStatus(dt.responses[1].url, dt.responses[1].element, dt.responses[1].text)

    })

  })

})