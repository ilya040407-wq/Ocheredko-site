const isLocal =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'

// На Vercel всегда /api (прокси в vercel.json) — иначе CORS блокирует preview/production URL
const API_URL = isLocal
  ? (process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '')
  : '/api'

export default API_URL
