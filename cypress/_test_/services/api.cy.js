import { Provider } from "react-redux"
import { SearchProvider } from "../../../src/context/Context"
import { BrowserRouter } from "react-router-dom"
import { fetchRecipeList } from "../../../src/services/api"
fetchRecipeList

describe('fetchRecipeList', () => {
  it('should fetch recipe list successfully', () => {

    cy.intercept("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list", {
      fixture: 'recipe.json'
    }).as('fetchRecipeList')

    fetchRecipeList().then((data) => {
      cy.log(data.Response.body)
      expect(data.Response.body).to.have.property('meals')
    })

    // cy.get('[data-cy="toggleList"]').click()
    // cy.wait("@fetchRecipeList").then((interception) => {
    //   const { Response } = interception

    //   cy.wrap(Response.statusCode).should('equal', 200)
    //   cy.wrap(Response.body).should('have property', 'meals')
    // })
  })


})