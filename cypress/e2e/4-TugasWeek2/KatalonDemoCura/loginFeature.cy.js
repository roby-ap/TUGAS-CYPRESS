describe('template spec', () => {

  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1536, 960)
  })

  it('passes', () => {
    cy.visit('')
  })

  Cypress.on('uncaught:exception', (err, runnable) => {  
    return false  
  }) 

})