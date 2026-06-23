const API_URL = process.env.REACT_APP_API_URL || (
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://127.0.0.1:8000'
    : 'https://ocheredko-site.onrender.com'
)

export default API_URL
