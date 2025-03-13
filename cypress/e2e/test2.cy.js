describe("Slide check", function (){
    it("Checks if the slides display correctly.", function (){
        cy.visit("http://localhost:3000");
        cy.get(".card-description").should("be.visible");
        cy.get(".swiper-slide").should("contain", "Rome").and("contain", "Italy");
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
        cy.get(".card-description").should("be.visible");
        cy.get(".swiper-slide").should("contain", "London").and("contain", "United Kingdom");
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
        cy.get(".card-description").should("be.visible");
        cy.get(".swiper-slide").should("contain", "Paris").and("contain", "France");
    })
})