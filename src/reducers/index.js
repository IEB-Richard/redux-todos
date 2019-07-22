import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilters from './visibilityFilters'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

const rootReducer = combineReducers({
  todos,
  visibilityFilters
})

export default rootReducer