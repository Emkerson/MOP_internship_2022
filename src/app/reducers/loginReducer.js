import { ERROR, LOGIN, LOGINPROCESSING } from '../actions/actionTypes'
const initialValues={
  loggedIn:false,
  loginProcessing:false,
  message:null,
}

export default (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true ,}
    case LOGINPROCESSING:
      return {
        ...state,
        loginProcessing: true,
      }
    case ERROR:
      return{
        ...state,
        loggedIn:false,
        loginProcessing: false,
        message: action.payload,
      }
    default:
      return state
  }
}
