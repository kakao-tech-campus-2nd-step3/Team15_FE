import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
const jwtToken = localStorage.getItem('jwt_token');
const parsedToken = jwtToken ? JSON.parse(jwtToken) : null;
const accessToken = parsedToken?.accessToken;


const instance = axios.create({
    baseURL: baseURL,
    timeout: 10 * 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
});

export default instance;