import Immutable, { merge } from "seamless-immutable"

export const LIST_RECIPES = "recipes/LIST_RECIPES"

const initialState = Immutable({
  recipes: [],
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_RECIPES:
      return merge(state, {
        recipes: action.recipes,
      })

    default:
      return state
  }
}

export const getRecipesList = () => async dispatch =>
  dispatch({
    type: LIST_RECIPES,
    recipes: [],
  })
