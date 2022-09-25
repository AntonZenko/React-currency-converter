import axios from 'axios';

const BASE_URL = 'https://cdn.cur.su/api/latest.json';

export const fetchCurrency = async () => {
  return await axios.get(`${BASE_URL}`);
};

export const PBfetchCurrency = async () => {
  return await axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11
`);
};
