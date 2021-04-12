const isSet = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export const getFavorites = () => {
  if (!isSet()) return;
  const {
    data: { userWithoutPassword },
  } = JSON.parse(localStorage.getItem('token'));
  const favorites = userWithoutPassword.favorites;
  return favorites;
};

export const getToken = () => {
  if (!isSet()) return;
  const {
    data: { token },
  } = JSON.parse(localStorage.getItem('token'));
  return token;
};

export const getUser = () => {
  if (!isSet()) return;
  const {
    data: { userWithoutPassword },
  } = JSON.parse(localStorage.getItem('token'));
  const { id, name, email } = userWithoutPassword;
  return { id, name, email };
};

export const clearStorage = () => {
  return localStorage.clear();
};
