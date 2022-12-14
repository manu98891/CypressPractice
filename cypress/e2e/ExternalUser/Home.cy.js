/// <reference types="cypress" />

describe('Practice the EEO',() =>{

    //Para ir a la pagina en la cual se va a realizar los test
    beforeEach(()=>{
        cy.visit('https://ashy-sand-026db7a0f.2.azurestaticapps.net/')
    })

    it('Verificar el titulo  de la aplicacion',() =>{
        cy.get('.sc-crXcEl > h2').should('include.text','¡Bienvenido a Endava Event Organizer!')
    })

    it('Verificar el subtitulo',()=>{
        cy.get('h4').should('include.text','Conectarse con profesionales del sector, compartir conocimiento y participar de actividades para actualizarnos juntos sobre las tendencias en IT. ¡Esto es Endava Event Organizer!')
    })

    it('Verificar el titulo de la aplicacion de la lista de eventos',()=>{
        cy.get('h1').should('include.text','Eventos')
    })

    it('Ir a un evento',() =>{
        cy.get(':nth-child(1) > .eventCard').click()
    })

    it('Verificar que aparesca el modal de inscripcion',() =>{
        cy.get(':nth-child(1) > .eventCard').click()
        cy.get('.sc-gFGZVQ > .MuiButton-root').click()
    })

    it('Verificar los campos del modal de inscripcion',()=>{
        cy.get(':nth-child(1) > .eventCard').click()
        cy.get('.sc-gFGZVQ > .MuiButton-root').click()
        cy.get('.formTitle').should('include.text','¡Finaliza tu inscripción!')
        cy.get('#mui-1').should('have.text','Nombre')
    })

})