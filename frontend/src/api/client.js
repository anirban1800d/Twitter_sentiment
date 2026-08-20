import axios from 'axios'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

const apiClient = axios.create({
  baseURL: API_BASE_URL.replace(/\/+$/, ''),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(
        new Error('Unable to connect to backend. Make sure FastAPI is running.')
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
