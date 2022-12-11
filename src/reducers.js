import { combineReducers } from 'redux'
import giphyReducer from './reducers/giphyReducer'

export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    giphy: giphyReducer,
    ...injectedReducers
  })

  return rootReducer
}
