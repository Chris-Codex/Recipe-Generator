import { configureStore } from "@reduxjs/toolkit"
import ingredientReducer, { selectAllRecipes, selectLoading, selectRecipeCategory, setLoading, setRecipeCategory } from "../../../src/features/recipeSlice/ingredientSlice"
import { fetchFilteredRecipes } from "../../../src/services/api";


describe('Test Redux store', () => {
  let store;

  beforeEach(() => {
    store = configureStore(({
      reducer: {
        ingredients: ingredientReducer
      }
    }))
  })

  //This test case checks that when setRecipeCategory action is dispatched the state is updated correctly
  it('should set the recipe category', () => {
    const category = 'chicken'
    store.dispatch(setRecipeCategory(category))
    const state = store.getState();
    expect(selectRecipeCategory(state)).to.equal(category)
  })

  //This test case checks that when setloading action is dispatched the state is updated correctly
  it('should set the loading state', () => {
    const loading = true;
    store.dispatch(setLoading(loading))
    const state = store.getState();
    expect(selectLoading(state)).to.equal(loading)
  })

  //This test case ensures that filtered recipes are fetched successfully
  it('should fetch filtered recipes successfully', async () => {
    const selectedIngredient = 'chicken';
    const quantity = '2';
    const availableCookingTime = '30';
    const numberOfIngredient = '3';
    const mealType = 'breakfast'

    await store.dispatch(fetchFilteredRecipes(selectedIngredient, quantity, availableCookingTime, numberOfIngredient, mealType));

    const state = store.getState();
    const recipes = selectAllRecipes(state)
    expect(recipes).to.be.an.instanceOf(Array)
  })
})