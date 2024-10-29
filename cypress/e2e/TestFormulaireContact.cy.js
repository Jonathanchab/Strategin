describe('testFormulaireContact', () => {
  beforeEach( () => {
    
    cy.timeout(7000);
    cy.visit("https://strateg.in/");
    cy.contains("Contactez-nous").click()

  })
  it('MailValide', () => {
   
    cy.get('#form_contact_email').type('jo@gmail.com').should('have.css', 'border-color',  'rgb(36, 87, 181)');
    
  })

  it('MailNonValide', () => {
    
    cy.get('#form_contact_email').type('jo')
    cy.get('.ant-form-explain').should("have.text", "votre email n'est pas valide!");
  
  })

  it('TelValide', () => {
    cy.get('#form_contact_tel').type('0623456789').should('have.css', 'border-color',  'rgb(36, 87, 181)');

  })

  it('TelNonValide', () => {
    cy.get('#form_contact_tel').type('06')
    cy.get('.ant-form-explain').should("have.text", "le numéro n'est pas valide");
    
  })

})