import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './app/reducers'
import App from './app/App'

const container = document.getElementById('root')
const root = createRoot(container)
const store = configureStore({ reducer: combineReducers })

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
)
