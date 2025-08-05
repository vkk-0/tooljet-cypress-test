describe('Creating a new app in ToolJet', () => {

    it('E2E testing in tooljet website', () => {

        const baseURL = "https://v3-lts-eetestsystem.tooljet.com/qa-interview"
        let createApp = "Testing Library " + Math.random().toFixed(3)
        let updatedAppName = "Updated " + createApp
        const username = 'vamshi@example.com'
        const password = 'password'

        cy.visit(baseURL)
        cy.get('input[id="email"]').type(username)
        cy.get('input[id="password"]').type(password)
        cy.get('span[class="button-text"').click()
        cy.contains('Create an app').should('be.visible') //assertion
        cy.contains('Create an app').click()
        cy.get('input[class="form-control "]').type(createApp)
        cy.get('button[form="createAppForm"]').click()
        const nextButton = (n) => {
            for (let i = 0; i < n; i++) {
                cy.contains('Next').click()
            }
        }
        nextButton(5)
        cy.get('input[data-cy="app-name-input"]').should('have.value', createApp) //assertion
        cy.get('input[data-cy="app-name-input"]').clear()
        cy.get('input[data-cy="app-name-input"]').type(updatedAppName)
        cy.get('input[data-cy="app-name-input"]').should('have.value', updatedAppName) //assertion
        cy.get('div[class="cursor-pointer"]').click()
        cy.contains('Back to ').click()
        cy.contains(updatedAppName, {timeout: 10000}).should('exist') //assertion
        cy.get('div[class="homepage-app-card-list-item"]').each(($el) => {
            if ($el.text().includes(updatedAppName)) {
                    cy.wrap($el).trigger('mouseover')
                    cy.wrap($el).within(() => {
                    cy.get('div[class="cursor-pointer menu-ico"]').click({force: true})
                })
            cy.contains('Delete app').should('be.visible') //assertion
            cy.contains('Delete app').click()
            cy.contains('The app '+ updatedAppName +' and the associated data will be permanently deleted, do you want to continue?').should('exist') //assertion
            cy.contains('Yes').should('be.visible') //assertion
            cy.contains('Cancel').should('be.visible') //assertion
            cy.contains('Yes').click()
            return false
            }
        })
        cy.contains(updatedAppName).should('not.exist') //assertion

    })

})