/* global describe, it, cy */

describe('Petgram', () => {
  it('app should works', () => {
    cy.visit('/')
  })

  it('navigation to a category', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navigate to home through navbar', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('users not logged need to watch form view', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
