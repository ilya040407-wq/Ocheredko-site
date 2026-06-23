const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '')
  }

  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'http://127.0.0.1:8000'
  }

  // На Vercel запросы идут через /api (vercel.json proxy) — без CORS-ошибок
  return '/api'
}

const API_URL = getApiUrl()

export default API_URL
