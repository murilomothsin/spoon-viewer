import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./modules"

const enhancers = []
const middleware = [thunk]

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

const composedEnhancers = composeSetup(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(rootReducer, undefined, composedEnhancers)
