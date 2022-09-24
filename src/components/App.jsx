// import './App.css';
import { CurrencyInput } from './CurrencyInput/CurrencyInput';
import { AppBar } from './AppBar/AppBar';
import { useState, useEffect } from 'react';
import { fetchCurrency } from './fetchService';

export const App = () => {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [rates, setRates] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  useEffect(() => {
    setIsLoadding(true);
    try {
      fetchCurrency(currency1).then(response => {
        console.log(response);
        setRates(makeOptions(response.data.rates));
      });
      setIsLoadding(false);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(rates);

  const options = ['USD', 'EUR', 'UAH', 'GBP'];

  const makeOptions = rates => {
    const filteredUsers = Object.keys(rates)
      .filter(key => options.includes(key))
      .reduce((obj, key) => {
        obj[key] = rates[key];
        return obj;
      }, {});
    return filteredUsers;
  };

  useEffect(() => {
    if (rates) {
      handleAmount1Change(amount1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    if (amount1 !== '') {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    }
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    if (amount1 !== '') {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    }
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    if (amount2 !== '') {
      setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    }
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    if (amount2 !== '') {
      setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    }
    setCurrency2(currency2);
  }

  const onButtonChange = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
    setAmount1(amount2);
    setAmount2(amount1);
  };

  return (
    <div>
      <AppBar />
      {isLoadding ? <h1>Loadding...</h1> : <h1>Currency Converter</h1>}
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <button type="button" onClick={onButtonChange}>
        CHANGE
      </button>
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
};
