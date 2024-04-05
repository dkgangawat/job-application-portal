'use client'

import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_API_ROUTE);

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;