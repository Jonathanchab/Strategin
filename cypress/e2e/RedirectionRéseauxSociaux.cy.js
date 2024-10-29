describe('RedirectionRéseaux', () => {
  beforeEach( () => {
    
    cy.timeout(60000);
    cy.visit("https://strateg.in/");
   

  })

  it('LienLinkedin', () => {

    cy.get('#social > [href="https://www.linkedin.com/company/strateg-in-company/"] > .anticon').click();
    cy.origin('https://www.linkedin.com', () => {
      cy.url().should('include', 'https://www.linkedin.com/')
    })
  })

  it('LienFacebook', () => {

    cy.get('#social > [href="https://facebook.com/strateginofficiel/"] > .anticon').click();
    cy.origin('https://www.facebook.com', () => {
      cy.url().should('include', 'https://www.facebook.com/')

    }) 

  })
  
  })




