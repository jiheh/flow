const PROD = (process.env.NODE_ENV === 'production');

const api = PROD ? 'http://something.herokuapp.com/api' : 'http://localhost:8080/api/';

export default api;
