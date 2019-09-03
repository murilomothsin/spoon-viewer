import Immutable, { merge } from "seamless-immutable"
const contentful = require("contentful")

// It asks for the access Token, a silly solution who works fine for now!
if (!window.localStorage.getItem("spoon.accessToken")) {
  const token = window.prompt("Enter your access token:")
  window.localStorage.setItem("spoon.accessToken", token)
}
const accessToken = window.localStorage.getItem("spoon.accessToken")

const client = contentful.createClient({
  space: "kk2bw5ojx476",
  accessToken: accessToken,
})

export const LIST_RECIPES = "recipes/LIST_RECIPES"
export const GET_RECIPE = "recipes/GET_RECIPE"

const initialState = Immutable({
  recipes: [],
  current: {},
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_RECIPES:
      return merge(state, {
        recipes: action.recipes,
      })
    case GET_RECIPE:
      return merge(state, {
        current: action.current,
      })

    default:
      return state
  }
}

export const getRecipesList = () => async dispatch =>
  client
    .getEntries()
    .then(response => {
      console.log(response.items)
      const recipes = response.items.filter(
        entry => entry.sys.contentType.sys.id === "recipe"
      )
      dispatch({
        type: LIST_RECIPES,
        recipes: recipes,
      })
    })
    .catch(console.error)

export const getRecipe = id => async dispatch =>
  client
    .getEntry(id)
    .then(response => {
      console.log(response)
      debugger
      dispatch({
        type: GET_RECIPE,
        current: response,
      })
    })
    .catch(console.error)
