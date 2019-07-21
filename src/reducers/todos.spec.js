import todos from './todos'
import * as actions from '../actions'

const todosArray = [
  {
    id: 0,
    text: 'Run the tests',
    completed: false
  },
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
]

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })
  it('should handle ADD_TODO', () => {
    expect(todos([], actions.addTodo('Run the tests'))).toEqual([todosArray[0]])
    expect(todos([todosArray[0]], actions.addTodo('Use Redux'))).toEqual(todosArray)
  })
  it('should handle TOGGLE_TODO', ()=>{
    expect(todos(todosArray, actions.toggleTodo(1))).toEqual([todosArray[0], {
      id: 1,
      text: 'Use Redux',
      completed: true
    }])
  })
})