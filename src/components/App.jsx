import { useState, useEffect } from 'react';
import { fetchCurrency } from './fetchService/fetchService';
import Container from './Container';
import AppBar from './AppBar';
import CurrencyInput from './CurrencyInput';
import Button from './Button';
import PageTitle from './PageTitle';
import PropagateLoader from 'react-spinners/PropagateLoader';

export const App = () => {
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [currency1, setCurrency1] = useState('USD');
  const [currencyB, setCurrencyB] = useState('UAH');
  const [rates, setRates] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchCurrency().then(response => {
        console.log(response.data.rates);
        setRates(makeOptions(response.data.rates));
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rates) {
      handleAmountAChange(amountA);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  const options = ['USD', 'EUR', 'UAH', 'GBP'];

  const makeOptions = rates => {
    const filteredUsers = Object.keys(rates)
      .filter(key => options.includes(key))
      .reduce((obj, key) => {
        obj[key] = rates[key].toFixed(2);
        return obj;
      }, {});
    return filteredUsers;
  };

  function handleAmountAChange(amountA) {
    if (amountA !== '') {
      setAmountB(((amountA * rates[currencyB]) / rates[currency1]).toFixed(2));
    }
    setAmountA(amountA);
  }

  function handleCurrency1Change(currency1) {
    if (amountA !== '') {
      setAmountB(((amountA * rates[currencyB]) / rates[currency1]).toFixed(2));
    }
    setCurrency1(currency1);
  }

  function handleAmountBChange(amountB) {
    if (amountB !== '') {
      setAmountA(((amountB * rates[currency1]) / rates[currencyB]).toFixed(2));
    }
    setAmountB(amountB);
  }

  function handleCurrencyBChange(currencyB) {
    if (amountB !== '') {
      setAmountA(((amountB * rates[currency1]) / rates[currencyB]).toFixed(2));
    }
    setCurrencyB(currencyB);
  }

  const onButtonChange = () => {
    setCurrency1(currencyB);
    setCurrencyB(currency1);
    setAmountA(amountB);
    setAmountB(amountA);
  };

  return (
    <>
      {rates && <AppBar rates={rates} />}
      <PageTitle>Currency Converter</PageTitle>
      <Container>
        <CurrencyInput
          autocomplete="off"
          onAmountChange={handleAmountAChange}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amountA}
          currency={currency1}
        />
        <Button onButtonChange={onButtonChange} />
        <CurrencyInput
          autocomplete="off"
          onAmountChange={handleAmountBChange}
          onCurrencyChange={handleCurrencyBChange}
          currencies={Object.keys(rates)}
          amount={amountB}
          currency={currencyB}
        />
        {isLoading && (
          <PropagateLoader color={'#3f51b5'} loading={isLoading} size={15} />
        )}
      </Container>
    </>
  );
};
