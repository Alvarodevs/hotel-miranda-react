describe("Login", () => {
	it("succesfully login navigates to dashboard", () => {
		cy.visit("/");
		cy.url().should("include", "/login");
		cy.get(".email-login")
			.type("alvaro@example.com")
		 	.should("have.value", "alvaro@example.com");
		cy.get(".passw-login")
		 	.type("1234")
		 	.should("have.value", "1234");

		cy.get(".login-form")
		 	.submit();

		cy.url().should("include", "/dashboard");
	})
})