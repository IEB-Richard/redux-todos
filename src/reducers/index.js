import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer