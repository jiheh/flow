const PROD = (process.env.NODE_ENV === 'production');

const server = PROD ? 'https://get-flow.herokuapp.com/' : 'http://localhost:8080/';

export default server;
