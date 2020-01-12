import customLocalStorage from './customLocalStorage';

const USER = 'user';

export const isLoggedIn = () => {
  if (customLocalStorage.getItem(USER)) {
    return true;
  }
  return false;
};

export const getAuthHeaderConfig = () => {
  const user = customLocalStorage.getItem(USER);
  const config = {
    headers: {
      Authorization: ''
    }
  };
  if (user) {
    config.headers.Authorization = `${user.token}`;
  }
  return config;
};

export const logoutUser = () => {
  customLocalStorage.removeItem(USER);
};
