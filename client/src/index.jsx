import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import birdsData from '../../temp/birdsData'

import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/index'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { fetchBirds } from './actions/actionBirds'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.dispatch(fetchBirds())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        birdsData={ birdsData }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
