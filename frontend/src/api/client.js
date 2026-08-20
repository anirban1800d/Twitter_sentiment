import axios from 'axios'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://twitter-sentiment-sc78.onrender.com'

const apiClient = axios.create({
  baseURL: API_BASE_URL.replace(/\/+$/, ''),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 120000,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(
        new Error('Unable to connect to the sentiment API. Please try again.')
      )
    }

    const detail = error.response.data?.detail

    if (error.response.status === 422) {
      return Promise.reject(
        new Error(detail || 'Invalid request format.')
      )
    }

    if (error.response.status === 400) {
      return Promise.reject(
        new Error(detail || 'Invalid input.')
      )
    }

    return Promise.reject(
      new Error(detail || `Backend error (${error.response.status}).`)
    )
  }
)

export { API_BASE_URL }
export default apiClient
