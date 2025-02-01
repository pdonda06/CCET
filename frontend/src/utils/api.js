import { env } from 'process';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchApi = async (endpoint, method = 'GET', body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};