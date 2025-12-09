const flightLocators = require('../../locators/flight.json');

class FlightPage {
  visit() {
    cy.visit('/');
  }

  clickItem(locator) {
        cy.get(locator).click();
    }

  clickFlightTab() {
    this.clickItem(flightLocators.flighttab).click();
  }

  // enterFromFlight(from) {
  //   cy.get(flightLocators.fromflight).type(from);
  // }

  // enterToFlight(to) {
  //   cy.get(flightLocators.toflight).type(to);
  // }

  // enterDepartDate(date) {
  //   cy.get(flightLocators.departdate).type(date);
  // }

  // selectFlightOccupancy() {
  //   cy.get(flightLocators.flighOcupancy).click();
  //   // Additional steps to select occupancy can be added here
  // }

  // clickSearchFlight() {
  //   cy.xpath(flightLocators.searchflight).click();
  // }
}

module.exports = new FlightPage();