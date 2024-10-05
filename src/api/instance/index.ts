import axios from 'axios';

// const baseURL = process.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: process.env.VITE_BASE_URL,
    timeout: 10 * 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default instance;