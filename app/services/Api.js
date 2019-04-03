// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const create = (baseURL = 'https://localhost:84/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})
  const getToken = (username, password) => {
    api.setHeader('Content-Type', 'application/json')

    return api.post('/authenticate', {
      'password': username,
      'username': password,
      'rememberMe': true
    })
  }
  const getAccount = (token) => {
    api.setHeader('Authorization', 'Bearer ' + token)

    return api.get('/account')
  }
  
  const getLog = (text) => {
    console.log(text)
  }
  
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
    getToken,
    getAccount,
    getLog
  }
}

export default {
  create
}
