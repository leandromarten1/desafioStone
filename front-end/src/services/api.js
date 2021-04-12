import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const apiLogin = (email, password) =>
  axios.post(`${BASE_URL}/login`, { email, password });

export const apiSignup = (name, email, password) =>
  axios.post(`${BASE_URL}/user`, { name, email, password });

export const saveFavorites = (id, favorites, token) =>
  axios.patch(
    `${BASE_URL}/user/${id}`,
    { favorites },
    { headers: { authorization: token } },
  );

export const updateUser = (id, name, email, password, token) =>
  axios.put(
    `${BASE_URL}/user/${id}`,
    { name, email, password },
    { headers: { authorization: token } },
  );
