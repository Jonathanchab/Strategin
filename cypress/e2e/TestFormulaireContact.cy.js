describe('testFormulaireContact', () => {

  let user = require('../fixtures/userData')

  beforeEach( () => {
    
    cy.timeout(7000);
    cy.visit("https://strateg.in/");
    cy.contains("Contactez-nous").should('be.visible').click()

  })
  it('MailValide', () => {
   
    cy.get('#form_contact_email').type(user.email).should('have.css', 'border-color',  'rgb(36, 87, 181)');
    
  })

  it('MailNonValide', () => {
    
    cy.get('#form_contact_email').type(user.emailnonValide)
    cy.get('.ant-form-explain').should("have.text", "votre email n'est pas valide!");
  
  })

  it('TelValide', () => {
    cy.get('#form_contact_tel').type(user.tel).should('have.css', 'border-color',  'rgb(36, 87, 181)');

  })

  it('TelNonValide', () => {
    cy.get('#form_contact_tel').type(user.telnonValide)
    cy.get('.ant-form-explain').should("have.text", "le numéro n'est pas valide");
    
  })

})