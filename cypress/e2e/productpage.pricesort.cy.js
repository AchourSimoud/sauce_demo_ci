/// <reference types="cypress" />

import loginPage from "../pages/login.page"
import ProductsPage from "../pages/product.page"

describe('Le tri des produits : Prix', { tags: '@productpage' },() => {
    
    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    loginPage.login('standard_user', 'secret_sauce')
    })

    context('Page des produits : tri par prix ', { tags: '@tc-011' },() => {
        it("Tri par prix croissant", () => {
            let prixNonTries = [];
        
            ProductsPage.elements.productPrice()
                .then((elements) => {
                    prixNonTries = Array.from(elements).map((el) => parseFloat(el.innerText.replace('$', '')));
                })
                .then(() => {
                    ProductsPage.selectionnerTriPar("lohi");
                    ProductsPage.verifierTriSelectionne("lohi");
                    ProductsPage.elements.productPrice().then((elements) => {
                        const prixApresTri = Array.from(elements).map((el) => parseFloat(el.innerText.replace('$', '')));
                        const prixManuelTries = Array.from(prixNonTries).sort((a, b) => a - b);
                        expect(prixApresTri).to.deep.equal(prixManuelTries);
                    });
                });
        });
        

        it('trier par prix décroissant', { tags: '@tc-012' },() => {
            let prixNonTries = [];
            ProductsPage.elements.productPrice()
                .then((elements) => {
                    prixNonTries = Array.from(elements).map((el) => parseFloat(el.innerText.replace('$', '')));
                })
                .then(() => {
                    ProductsPage.selectionnerTriPar("hilo");
                    ProductsPage.verifierTriSelectionne("hilo");
                    ProductsPage.elements.productPrice().then((elements) => {
                        const prixApresTri = Array.from(elements).map((el) => parseFloat(el.innerText.replace('$', '')));
                        const prixManuelTries = Array.from(prixNonTries).sort((a, b) => b - a);
                        expect(prixApresTri).to.deep.equal(prixManuelTries);
                    });
                });

        })
    })
});
