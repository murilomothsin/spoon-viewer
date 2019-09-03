import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipesList } from "../../../modules/recipe"

const List = () => {
  const dispatch = useDispatch()

  const recipes = useSelector(state => {
    return state.recipe.recipes
  })

  const getList = useCallback(() => {
    dispatch(getRecipesList())
  }, [dispatch])

  useEffect(() => {
    getList()
  }, [getList])

  const drawList = () => {
    if (!recipes) {
      return <li>No recipes</li>
    }

    return recipes.map(recipe => (
      <li key={recipe.sys.id}>
        <img
          src={recipe.fields.photo.fields.file.url}
          alt={recipe.fields.photo.fields.title}
        />
        <h3>{recipe.fields.title}</h3>

        <p>{recipe.fields.description}</p>
      </li>
    ))
  }

  return (
    <>
      <h1>List</h1>
      <ul>{drawList()}</ul>
    </>
  )
}

export default List
