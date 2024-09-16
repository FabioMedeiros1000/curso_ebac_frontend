/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/') 
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Fábio Leandro Medeiros')
        cy.get('input[placeholder="E-mail"]').type('fabio.leandro.medeiros@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('(82) 99187-1637')
        cy.get('.adicionar').click()

        cy.contains('Fábio Leandro Medeiros').should('exist')
    })

    it('Deve editar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Bruna Costa')
        cy.get('input[placeholder="E-mail"]').type('bruna.costa@example.com')
        cy.get('input[placeholder="Telefone"]').type('(82) 91234-5678')
        cy.get('.adicionar').click()

        cy.contains('Bruna Costa').should('exist')

        cy.get('.edit').first().click()  
        cy.get('input[placeholder="Nome"]').clear().type('Bruna Mendes Costa')
        cy.get('input[placeholder="E-mail"]').clear().type('bruna.mendes@example.com')
        cy.get('input[placeholder="Telefone"]').clear().type('(82) 92345-6789')
        cy.get('.alterar').click()

        cy.contains('Bruna Mendes Costa').should('exist')
    })

    it('Deve remover um contato', () => {
        cy.contains('Bruna Mendes Costa').should('exist')
        cy.get('.delete').first().click()
        cy.contains('Bruna Mendes Costa').should('not.exist')
    })
})
