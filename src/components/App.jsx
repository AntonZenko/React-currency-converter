import { useState, useEffect } from 'react';
import { AppBar } from './AppBar/AppBar';
// import { lazy, Suspense } from 'react';
import { fetchCurrency } from './fetchService';
import { Calculate } from './Calculate/Calculate';

export const App = () => {
  const [currencyList, setCurrencyList] = useState(null);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const currency = await fetchCurrency();
        setCurrencyList(currency);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrency();
  }, []);

  return (
    <div>
      <AppBar currencyList={currencyList} />
      <Calculate currencyList={currencyList} />
    </div>
  );
};
