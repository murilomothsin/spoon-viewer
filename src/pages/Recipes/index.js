import React from "react"
import { Route, Switch } from "react-router-dom"
import List from "./List"
import Details from "./Details"

const Recipes = () => {
  return (
    <Switch>
      <Route exact path="/recipes" component={List} />
      <Route path="/recipes/:recipeId" component={Details} />
    </Switch>
  )
}

export default Recipes
