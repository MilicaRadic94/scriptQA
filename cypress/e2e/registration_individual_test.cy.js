describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/./register"),
    cy.get("form");

cy.contains('U REDU').click();      

cy.get('#gender-male').click();
cy.get('#FirstName').type('Petar');
cy.get('#LastName').type('Petrović');
cy.get('select[name="DateOfBirthDay"]').select('1').should('have.value','1');
cy.get('select[name="DateOfBirthMonth"]').select('1').should('have.value','1');
cy.get('select[name="DateOfBirthMonth"]').select('1').should('have.value','1');
cy.get('select[name="DateOfBirthYear"]').select('1994').should('have.value','1994');

cy.get('#Email').type('justforfunandappsonly@gmail.com');

cy.get('#StreetAddress').type('Dimitrija Tucovića 20a');
cy.get('label[for="ZipPostalCode"]').siblings('.ui-autocomplete-input').type(11000);
cy.get('#ui-id-2').click();

cy.get('#Password').type('asd').blur();
cy.get('span[for="Password"]').should('have.text','Lozinka treba imati najmanje 6 znakova.');
cy.get('#Password').type('fghj');

cy.get('#ConfirmPassword').type('asdfg').blur();
cy.get('span[for="ConfirmPassword"]').should('have.text','Lozinka i potvrda lozinke se ne podudaraju.');
cy.get('#ConfirmPassword').type('hj');

cy.get('#register-button').click();

cy.get('.validation-summary-errors li').should('have.text','Navedena elektronska pošta/adresa postoji');
cy.get('#Email').clear().type('new.emailgmail.com').blur();
cy.get('span[for="Email"]').should('have.text','Pogrešan e-mail' );
cy.get('#Email').clear().type('new.email.928@com.com').blur();
cy.get('#register-button').click();

cy.url().should('contains', 'https://www.links.hr/hr/registerresult/2');
cy.get('.button-1.register-continue-button').click();




  })

})

