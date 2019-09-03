import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipe } from "../../../modules/recipe"

const Details = props => {
  const dispatch = useDispatch()
  const { recipeId } = props.match.params
  console.log(recipeId)
  const recipe = useSelector(state => {
    return state.recipe.current
  })

  const get = useCallback(() => {
    dispatch(getRecipe())
  }, [dispatch])

  useEffect(() => {
    get()
  }, [get])

  console.log(recipe)
  return <h1>{recipe.fields.title}</h1>
}

export default Details
