import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10 * 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const jwtToken = localStorage.getItem('jwt_token');
        const parsedToken = jwtToken ? JSON.parse(jwtToken) : null;
        const accessToken = parsedToken?.accessToken;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
            delete config.headers.Authorization;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;