import axios, { AxiosRequestConfig } from 'axios'


const api = axios.create({
  baseURL: 'https://domain.com/api/',
  timeout: 5000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

api.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      // @ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)

api.interceptors.response.use((res) => {
  return res
})

export default api

