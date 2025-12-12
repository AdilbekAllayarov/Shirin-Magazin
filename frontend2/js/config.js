// API Configuration
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:8000'
  : (window.location.hostname === '192.168.1.4' 
      ? 'http://192.168.1.4:8000'
      : 'https://api.yourdomain.com'); // Production API URL ni bu yerga yozing

export { API_URL };
