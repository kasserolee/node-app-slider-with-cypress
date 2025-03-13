it("Checks if the gallery displays correctly.", function (){
    cy.visit("http://localhost:3000");
    cy.get(".card-contents").should("be.visible");
    cy.get(".card-description").should("contain", "Rome").and("contain", "Italy");
    cy.get(".swiper-button-next").should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.wait(500);
    cy.get(".card-contents").should("be.visible");
    cy.get(".card-description").should("contain", "London").and("contain", "United Kingdom");
    cy.get(".swiper-button-next").should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.wait(500);
    cy.get(".card-contents").should("be.visible");
    cy.get(".card-description").should("contain", "Paris").and("contain", "France");
    cy.get(".swiper-button-next").should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.wait(500);
    cy.get(".card-description").should("contain", "Rome").and("contain", "Italy");
    cy.get(".swiper-button-prev").should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.wait(500);
    cy.get(".card-description").should("contain", "Paris").and("contain", "France");
    cy.get(".swiper-button-prev").should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.wait(500);
    cy.get(".card-description").should("contain", "London").and("contain", "United Kingdom");
    cy.get(".swiper-button-prev").should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.wait(500)
    cy.get(".card-description").should("contain", "Rome").and("contain", "Italy");
})