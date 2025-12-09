describe('Flight departure to Singapura', () => {
    // `flightPage` exports a singleton instance, so don't call `new` here
    // const flight = flightPage;

    beforeEach(() => {
        cy.visit('https://www.agoda.com/');
    });

    it('Search Flight', () => {
        cy.get("[id='tab-flight-tab']").click();

    });
})
