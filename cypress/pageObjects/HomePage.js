export class HomePage {

    static visit() {
        return cy.visit("https://demoqa.com/automation-practice-form/");
    }

    static get url() {
        return "/#/";
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get genderRadioMale() {
        return cy.get('[for="gender-radio-1"]');
    }

    static get userNumber() {
        return cy.get("#userNumber");
    }

    static get subjects() {
        return cy.get("[class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']");
    }

    static get dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get year() {
        return cy.get("[class='react-datepicker__year-select']");
    }
    
    static get month() {
        return cy.get("[class='react-datepicker__month-select']");
    }

    static day(month) {
        return cy.get("[class^='react-datepicker__day react-datepicker__day'][aria-label*='" + month + "']");
    }

    static get hobbiesMusic() {
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get fileSelector() {
        return cy.get('#uploadPicture');
    }

    static get address() {
        return cy.get('#currentAddress');
    }

    static get state() {
        return cy.get('[class=" css-yk16xz-control"]');
    }

    static get stateInput() {
        return cy.get('#react-select-3-input');
    }

    static get city() {
        return cy.get('[class=" css-yk16xz-control"]');
    }

    static get cityInput() {
        return cy.get('#react-select-4-input');
    }

    static get submit() {
        return cy.get('#submit');
    }

    static get valueTable() {
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]');
    }

    static getValue(table, property) {
        return table.contains(property);
    }

}