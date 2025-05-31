import { HomePage } from "../pageObjects/HomePage"

describe('FW', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Scen 1', () => {
    
    const firstName = "Baba";
    const lastName = "ZabaDaba";
    const email = "Baba@BabaZabaDaba.com";
    const number = "90904884";
    const year = "1930";
    const month = "February";
    const day = "28";
    const subject = "Economics";
    const address = "Rubicon 3, Xylem, the Floating City";
    const state = "NCR";
    const city = "Delhi";

    HomePage.firstName.type(firstName);
    HomePage.lastName.type(lastName);
    // Mans domēns btw ( ͡° ͜ʖ ͡°)
    HomePage.userEmail.type(email);
    HomePage.genderRadioMale.click();
    HomePage.userNumber.type(number);
    HomePage.dateOfBirthInput.click();
    HomePage.year.select(year);
    HomePage.month.select(month);
    HomePage.day(month).contains(day).click();

    HomePage.subjects.type(subject);
    cy.press(Cypress.Keyboard.Keys.TAB);

    HomePage.hobbiesMusic.click();

    HomePage.fileSelector.selectFile('../WEB_AUT_OTTO_JANIS_JANSONS_FINAL_TASK/cypress/files/chomusuke.png');
    HomePage.address.type(address);
    
    HomePage.state.click();
    HomePage.stateInput.type(state);
    cy.press(Cypress.Keyboard.Keys.TAB);
    HomePage.city.click();
    HomePage.cityInput.type(city);
    cy.press(Cypress.Keyboard.Keys.TAB);

    HomePage.submit.click();
    
    // Hey, if it works, it's not stupid (but it is)
    HomePage.valueTable.get("tr").contains("Student Name").siblings().should("have.text", firstName + " " + lastName);
    HomePage.valueTable.get("tr").contains("Student Email").siblings().should("have.text", email);
    HomePage.valueTable.get("tr").contains("Gender").siblings().should("have.text", "Male");
    HomePage.valueTable.get("tr").contains("Date of Birth").siblings().should("have.text", day + " " + month + "," + year);
    HomePage.valueTable.get("tr").contains("Subjects").siblings().should("have.text", subject);
    HomePage.valueTable.get("tr").contains("Hobbies").siblings().should("have.text", "Music");
    HomePage.valueTable.get("tr").contains("Picture").siblings().should("have.text", "chomusuke.png");
    HomePage.valueTable.get("tr").contains("Address").siblings().should("have.text", address);
    HomePage.valueTable.get("tr").contains("State and City").siblings().should("have.text", state + " " + city);

  })

})