describe('testFormulaireRecrutement', () => {

  let user = require('../fixtures/userData')
  
  beforeEach( () => {
    
    cy.timeout(7000);
    cy.visit("https://strateg.in/");
    cy.contains("Recrutement").click()
    cy.contains('Candidature spontanée').click();
    cy.get('[style="z-index: 3; position: relative; background-color: rgb(253, 253, 253);"] > #offre_barre').should('have.text', 'Formulaire de candidature');
    cy.get('.ant-select-selection__rendered').click()
    cy.get('.ant-select-dropdown-menu-item').eq(1).click();
    cy.get('.ant-select-selection-selected-value').should('have.text', 'Développeur');

  })
    it('EmailValide', () => {
      
      cy.get('[placeholder="email"]').type(user.email).should('have.css', 'border-color',  'rgb(36, 87, 181)');
      
    })

    it('EmailNonValide', () => {

      cy.get('[placeholder="email"]').type(user.emailnonValide)
      cy.get('.ant-form-explain').should("have.text", "votre email n'est pas valide!");
    
    })

    it('TelValide', () => {

      cy.get('#form_candidature_tel').type(user.tel).should('have.css', 'border-color',  'rgb(36, 87, 181)');

    })

    it('TelNonValide', () => {

      cy.get('#form_candidature_tel').type(user.telnonValide);
      cy.get('.ant-form-explain').should("have.text", "le numéro n'est pas valide");
      cy.get('#form_candidature_tel').clear();
      cy.get('.ant-form-explain').should("have.text", "Entrer votre nom svp!");


    })
  })