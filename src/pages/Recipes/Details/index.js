import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipe } from "../../../modules/recipe"
import {
  BackBtn,
  RecipeWrapper,
  RecipeDetails,
  Img,
  Title,
  Description,
  Tag,
  Footer,
} from "./index.styled"

const Details = props => {
  const dispatch = useDispatch()
  const { recipeId } = props.match.params

  const recipe = useSelector(state => state.recipe.current)

  useEffect(() => {
    dispatch(getRecipe(recipeId))
  }, [dispatch, recipeId])

  const drawTagList = tags => {
    if (!tags) {
      return null
    }
    return tags.map(tag => <Tag key={tag.fields.name}>{tag.fields.name}</Tag>)
  }

  if (!recipe.fields) {
    return null
  }

  return (
    <RecipeWrapper>
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
      <BackBtn to="/recipes">
        <i class="fas fa-angle-left"></i>
      </BackBtn>
    </RecipeWrapper>
  )
}

export default Details
