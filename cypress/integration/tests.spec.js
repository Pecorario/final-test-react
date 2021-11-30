describe('User', () => {
  before(() => {
    cy.visit('/');
  });

  it('Invalid data on registration', () => {
    cy.get('[data-cy="btn-signup"]').click();

    cy.get('[data-cy="input-email"]').type('taynarahotmail.com');
    cy.get('[data-cy="input-password"]').type('1234567');
    cy.get('[data-cy="btn-register"]').click();

    cy.get('[data-cy="invalid-data"]').should('exist');
  });

  it('Create an user', () => {
    cy.get('[data-cy="input-name"]').clear();
    cy.get('[data-cy="input-email"]').clear();
    cy.get('[data-cy="input-password"]').clear();

    cy.get('[data-cy="input-name"]').type('Taynara');
    cy.get('[data-cy="input-email"]').type('taynara@hotmail.com');
    cy.get('[data-cy="input-password"]').type('12345678');
    cy.get('[data-cy="btn-register"]').click();

    cy.get('.Toastify__toast--success').should('exist');
  });

  it('Invalid password on log in', () => {
    cy.get('[data-cy="input-email"]').type('taynara@hotmail.com');
    cy.get('[data-cy="input-password"]').type('123478');
    cy.get('[data-cy="btn-login"]').click();

    cy.get('[data-cy="invalid-data"]').should('exist');
  });

  it('Log in', () => {
    cy.get('[data-cy="input-email"]').clear();

    cy.get('[data-cy="input-email"]').type('taynara@hotmail.com');
    cy.get('[data-cy="input-password"]').type('12345678');
    cy.get('[data-cy="btn-login"]').click();

    cy.location('pathname').should('include', '/home');
  });
});

describe('Game', () => {
  it('Complete game', () => {
    cy.get('[data-cy="btn-new-bet"]').click();
    cy.get('[data-cy="Mega-Sena"]').click();
    cy.get('[data-cy="btn-complete-game"]').click();
    cy.get('[data-cy="btn-add-game-to-cart"]').click();

    cy.get('[data-cy="span-empty-cart"]').should('not.exist');
    cy.get('[data-cy="items-cart"]').should('have.length', 1);
  });

  it('Save game with a value less than R$30,00', () => {
    cy.get('[data-cy="btn-save"]').click();
    cy.get('.Toastify__toast--warning').should('exist');
  });

  it('Save game succesfuly', () => {
    let i = 1;
    for (i; i < 4; i++) {
      cy.get('[data-cy="Mega-Sena"]').click();
      cy.get('[data-cy="btn-complete-game"]').click();
      cy.get('[data-cy="btn-add-game-to-cart"]').click();

      cy.get('[data-cy="span-empty-cart"]').should('not.exist');
      cy.get('[data-cy="items-cart"]').should('have.length', i + 1);
    }

    for (i; i < 7; i++) {
      cy.get('[data-cy="Lotofácil"]').click();
      cy.get('[data-cy="btn-complete-game"]').click();
      cy.get('[data-cy="btn-add-game-to-cart"]').click();

      cy.get('[data-cy="span-empty-cart"]').should('not.exist');
      cy.get('[data-cy="items-cart"]').should('have.length', i + 1);
    }

    for (i; i < 10; i++) {
      cy.get('[data-cy="Quina"]').click();
      cy.get('[data-cy="btn-complete-game"]').click();
      cy.get('[data-cy="btn-add-game-to-cart"]').click();

      cy.get('[data-cy="span-empty-cart"]').should('not.exist');
      cy.get('[data-cy="items-cart"]').should('have.length', i + 1);
    }

    cy.get('[data-cy="btn-save"]').click();
    cy.get('.Toastify__toast--success').should('exist');
  });
});
