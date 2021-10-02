// import { applyMiddleware, combineReducers, createStore } from 'redux'
// import persistData from 'redux-localstorage'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from './productDucks'

const rootReducer = combineReducers({
  product: productReducer,
})

// const composeEnhancers : any = composeWithDevTools(
//   persistData("product"),
// )

const composeEnhancers : any = composeWithDevTools()

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers)
  return store
}