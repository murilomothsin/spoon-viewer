import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipesList } from "../../../modules/recipe"
import {
  Content,
  RecipeWrapper,
  RecipeDetails,
  Img,
  Title,
  Description,
  Tag,
  Footer,
} from "./index.styled"

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

  const drawTagList = tags => {
    if (!tags) {
      return null
    }
    return tags.map(tag => <Tag>{tag.fields.name}</Tag>)
  }

  const drawList = () => {
    if (!recipes) {
      return <li>No recipes</li>
    }

    return recipes.map(recipe => (
      <RecipeWrapper key={recipe.sys.id} to={`/recipes/${recipe.sys.id}`}>
        <Img
          src={recipe.fields.photo.fields.file.url}
          alt={recipe.fields.photo.fields.title}
        />
        <RecipeDetails>
          <Title as="h3">{recipe.fields.title}</Title>
          <Description>{recipe.fields.description}</Description>
          <Footer>
            <Footer>{drawTagList(recipe.fields.tags)}</Footer>
            {recipe.fields.chef && (
              <Tag>Chef: {recipe.fields.chef.fields.name}</Tag>
            )}
          </Footer>
        </RecipeDetails>
      </RecipeWrapper>
    ))
  }

  return (
    <>
      <h1>List</h1>
      <Content>{drawList()}</Content>
    </>
  )
}

export default List
