
import { fetchAllCategories, fetchFilteredRecipes, fetchRecipeList, fetchRecipes } from "../../../src/services/api"
import { store } from '../../../src/features/store';

//Test endpoint that fetches list of recipes
describe('Test all API', () => {
  it('should fetch recipe list successfully', () => {

    cy.intercept("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list", {
      fixture: 'recipe.json'
    }).as('fetchRecipeList')

    fetchRecipeList().then((interception) => {
      expect(interception.response.statusCode).to.be(200)
      expect(interception.response.body).to.have.property('meals')
    })
  })

  //Test endpoint that handles filtering of recipes
  it("should fetch filtered recipes successfully", () => {
    const selectedIngredient = 'chicken';
    const quantity = '2';
    const availableCookingTime = '30';
    const numberOfIngredient = '3';
    const mealType = 'breakfast'

    cy.intercept("GET", 'https://themealdb.com/api/json/v1/1/filter.php').as("fetchFilteredRecipes");

    store.dispatch(fetchFilteredRecipes(selectedIngredient, quantity, availableCookingTime, numberOfIngredient, mealType))
      .then(({ payload }) => {
        const meals = payload;
        expect(meals).to.be.an('array')
      });

    cy.wait('@fetchFilteredRecipes').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.have.property('meals')
    })
  })


  // This test handles fetching list of recipe category from the API
  it('should fetch recipe by category successfully', () => {

    cy.intercept("GET", "https://www.themealdb.com/api/json/v1/1/categories.php", {
      fixture: 'category.json'
    }).as('fetchRecipeList')

    fetchAllCategories().then((interception) => {
      expect(interception.response.statusCode).to.be(200)
      expect(interception.response.body).to.have.property('meals')
    })
  })

  //This function handles filetering of the recipes when its active
  it('should filter recipes successfully', () => {
    const activeCategory = 'chicken'

    cy.intercept("GET", `https://themealdb.com/api/json/v1/1/filter.php?i=${activeCategory}`).as('filterCategory')

    fetchRecipes().then((interception) => {
      expect(interception.response.statusCode).to.be(200)
      expect(interception.response.body).to.have.property('meals')
    })
  })
})



