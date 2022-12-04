import AxiosApi from '../common/AxiosApi'
import {
  LOGIN,
  REGISTER,
  LOGINPROCESSING,
  REGISTERING,
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE,
  ERROR,
} from './actionTypes.js'

const loginProcessing = () => {
  return {
    type: LOGINPROCESSING,
    payload: '',
  }
}
const login = (content) => {
  return {
    type: LOGIN,
    payload: content.data,
  }
}
const registerProcessing = () => {
  return {
    type: REGISTERING,
    payload: '',
  }
}
const register = (content) => {
  return {
    type: REGISTER,
    payload: content,
  }
}
const errors = (content) => {
  return {
    type: ERROR,
    payload: content.response.data,
  }
}

export const startLogin = (content) => {
  return async (dispatch) => {
    dispatch(loginProcessing())
    try {
      const res = await AxiosApi.post('login', content)
      dispatch(login(res))
      localStorage.setItem('jwt_token', res.data)
    } catch (error) {
      dispatch(errors(error))
    }
  }
}

export const startRegister = (content) => {
  return async (dispatch) => {
    dispatch(registerProcessing())
    try {
      const res = await AxiosApi.post('register', content)
      setTimeout(() => {
        dispatch(register(res))
      }, 2000)
       console.log('res ', res.data)
      // alert(`${res.data.userName} are sign in`)
    } catch (error) {
      dispatch(errors(error))
    }
  }
}

//favorite Movies TODO create movieReducer
export const addFavoriteMovie = (data) => {
  return {
    type: ADD_FAVORITE_MOVIE,
    payload: {
      name: data.name,
      description: data.description,
    },
  }
}

export const removeFavoriteMovie = (name) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: {
      name,
    },
  }
}
