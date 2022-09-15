import { ERROR,REGISTER, REGISTERING } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, registered: true , }
    case REGISTERING:
      return {
        ...state,
        registering: true,
        formError: false,
      }
      case ERROR:
      return{
        ...state,
        registering: false,
        message: action.payload,
      }
    default:
      return state
  }
}
