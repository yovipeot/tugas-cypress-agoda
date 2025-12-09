import flightPage from '../../support/page-object/flightPage';
import flightData from '../../fixtures/flight/flightData.json';

describe('Flight departure to Singapura', () => {
  // `flightPage` exports a singleton instance, so don't call `new` here
  const flight = flightPage;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Search Flight', () => {
    flight.clickFlightTab(flightData.flightDestinattion.flyingTo);
    // flight.enterFromFlight(flightData.flightDestinattion.flyingFrom);
  });
});