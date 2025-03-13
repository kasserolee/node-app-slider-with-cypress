describe('Multiple device accessibility check.', function () {
    let presets = ['ipad-2', 'samsung-note9', 'macbook-11']
    for (let i = 0; i < 3; i++){
        it('Checks if the site works on a '+presets[i], function () {
            cy.viewport(presets[i]);
            cy.visit('http://localhost:3000');
            cy.get(".card-contents").should("be.visible");
            cy.get(".swiper-button-prev").click();
            cy.wait(500)
            cy.get(".swiper-slide").should("contain", "London").and("contain", "United Kingdom");
            cy.get(".swiper-button-prev").click();
            cy.wait(500)
            cy.get(".swiper-slide").should("contain", "Rome").and("contain", "Italy");
        });
    }
});