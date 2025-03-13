describe("Slider check", function (){
    it("Checks if the left and right sliders work.", function (){
        cy.visit("http://localhost:3000");
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
        cy.get(".swiper-slide").should("contain", "London");
        cy.get(".swiper-button-prev").click();
        cy.wait(1000);
        cy.get(".swiper-slide").should("contain", "Rome");
    })
})