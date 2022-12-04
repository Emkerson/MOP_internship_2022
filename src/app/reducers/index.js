import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import singupReducer from './singupReducer'

export default combineReducers({
  login:loginReducer,
  register: singupReducer,
})
