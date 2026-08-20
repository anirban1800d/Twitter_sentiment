import apiClient from '../api/client'

export async function getHealth() {
  const response = await apiClient.get('/')
  return response.data
}

export async function analyzeSingle(text) {
  const response = await apiClient.post('/predict', { text })
  return response.data
}

// IMPORTANT: backend signature is predict_batch(texts: list[str]),
// therefore this endpoint expects a RAW JSON ARRAY, not {"texts": [...]}
export async function analyzeBatch(texts) {
  const response = await apiClient.post('/predict/batch', texts)
  return response.data
}
