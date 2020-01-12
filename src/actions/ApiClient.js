import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

const API_URLS = {
  COMMUTERS_LOGIN: BASE_URL + '/commuters/login',
  COMMUTERS: BASE_URL + '/commuters'
};

export const registerCommuter = data => {
  const url = API_URLS.COMMUTERS;
  return axios.post(url, data);
};

export const loginCommuter = data => {
  const url = API_URLS.COMMUTERS_LOGIN;
  return axios.post(url, data);
};
