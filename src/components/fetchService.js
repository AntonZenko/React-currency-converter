import axios from 'axios';

const API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export async function fetchCurrency() {
  const response = await axios.get(`${API_URL}`);

  return response.data;
}
