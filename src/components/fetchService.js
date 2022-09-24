import axios from 'axios';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data';
const API_KEY = '3pYzMJySHy9zh72EkTFtnWruisJmpTQG';

export async function fetchCurrency(baseCurrency) {
  return await axios.get(
    `${BASE_URL}/latest?base=${baseCurrency}&apikey=${API_KEY}`
  );
}
