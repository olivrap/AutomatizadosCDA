/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://lishomol.grupopardini.com.br/')
    cy.get('#control_14').type('gabriel.tureck');
    cy.get('#control_16').type('Balu1006,,');
    cy.get('#control_16').type('{enter}');

    cy.wait(1000)

    cy.get('#iconMenu').click()
    cy.get('#pMenu').type('inclusões e exclusões{enter}')
    cy.wait(500)
    cy.get('#lnkMenu-menuPré\\ Analitico-HPardini\\.PreAnaliticoBE\\.Pagina\\.Relatorios\\.cls\\?Tipo\\=InclusaoExclusao > b').click()

    cy.frameLoaded('iframe[id=iframe_41]');
    cy.wait(2500)
    cy.iframe('iframe[id=iframe_41]')
      .find('input[id=initialDate]').type('31052023');
    cy.iframe('iframe[id=iframe_41]')
      .find('input[id=finalDate]').type('31052023');


    cy.iframe('iframe[id=iframe_41]')
      .find('div[class="sc-dEsUz jBRVGJ"]').click();

      cy.iframe('iframe[id=iframe_41]')
      .find('li[data-value="Inclusao"]').click();


    cy.iframe('iframe[id=iframe_41]')
      .find('button[type=submit]').click();
  })

})