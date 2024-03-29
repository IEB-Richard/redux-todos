import * as actions from '../actions'
const todos = ( state = [], action) => {
  switch(action.type){
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case actions.TOGGLE_TODO:
      return state.map( todo => 
        ( todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo 
      )
    default:
      return state
  }
}

export default todos