describe("Login", () => {
	it("not success, display alert & remain in login", () => {
		cy.visit("/");
		cy.url().should("include", "/login");
		cy.get(".email-login")
			.type("alvaro@example.com")
		 	.should("have.value", "alvaro@example.com");
		cy.get(".passw-login")
		 	.type("6789")
		 	.should("have.value", "6789");

		cy.get(".login-form")
		 	.submit()
		window.alert('Wrong email or password')
		cy.url().should("include", "/login");
	})
})