import axios from 'axios'
//url nije fiksiran
const baseUrl = 'https://00e3-185-13-243-50.eu.ngrok.io/'
const token = localStorage.getItem('jwt_token')

const AxiosApi = () => {
  const post = (url, values) => axios.post(`${baseUrl}${url}`, 
  values
  )
  const get = (url) => axios.get(`${baseUrl}${url}`,{
    headers: {
      jwtToken: {token}
    }
  },)
  return {
    post,
    get,
  }
}
export default AxiosApi()
