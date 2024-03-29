import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import createStore from './store/configureStore'

const store = createStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)