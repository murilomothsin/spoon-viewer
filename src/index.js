import React from "react"
import ReactDOM from "react-dom"
import { Redirect, Route, Switch } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import { RouterProvider } from "./lib/RouterProvider"
import { store } from "./store"
import Recipes from "./pages/Recipes"
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"

import "./index.css"

library.add(faCheck)
dom.watch()

const Root = ({ store }) => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider>
        <Switch>
          <Redirect exact from="/" to="/recipes" />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </RouterProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<Root store={store} />, document.getElementById("root"))
