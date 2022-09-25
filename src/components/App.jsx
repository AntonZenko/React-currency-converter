import { useState, useEffect } from 'react';
import { fetchCurrency, PBfetchCurrency } from './fetchService/fetchService';
import Container from './Container';
import AppBar from './AppBar';
import CurrencyInput from './CurrencyInput';
import Button from './Button';
import PageTitle from './PageTitle';
import PropagateLoader from 'react-spinners/PropagateLoader';

export const App = () => {
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [currencyA, setCurrencyA] = useState('USD');
  const [currencyB, setCurrencyB] = useState('UAH');
  const [rates, setRates] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  const [buyRates, setBuyRates] = useState(null);
  const [saleRates, setSaleRates] = useState(null);

  const [pbRates, setPbRates] = useState([]);

  useEffect(() => {
    setIsLoadding(true);
    try {
      fetchCurrency().then(response => {
        setRates(makeOptions(response.data.rates));
      });
      PBfetchCurrency()
        .then(response => response.data)
        .then(data => {
          setRates(pbDataBuy(data.filter(item => item.ccy !== 'BTC')));
          // setBuyRates(pbDataBuy(pbRates));
          // setSaleRates(pbDataSale(pbRates));
        });
      setIsLoadding(false);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(rates);

  function pbDataBuy(arr) {
    let buyRates = {};
    arr.forEach(item => (buyRates[item.ccy] = item.buy));
    return buyRates;
  }

  function pbDataSale(arr) {
    let saleRates = {};
    arr.forEach(item => (saleRates[item.ccy] = item.sale));
    return saleRates;
    // return setSaleRates(saleRates);
  }

  useEffect(() => {
    if (rates) {
      handleAmountAChange(amountA);
    }
    // console.log(rates);
    // console.log(buyRates);
    // console.log(saleRates);
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

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmountAChange(amountA) {
    // console.log(rates[currencyB], rates[currencyA]);
    if (amountA !== '') {
      setAmountB(format((amountA * rates[currencyB]) / rates[currencyA]));
    }
    setAmountA(amountA);
  }

  function handleCurrencyAChange(currencyA) {
    // console.log(currencyA, currencyB);
    if (amountA !== '') {
      setAmountB(format((amountA * rates[currencyB]) / rates[currencyA]));
    }
    setCurrencyA(currencyA);
  }

  function handleAmountBChange(amountB) {
    if (amountB !== '') {
      setAmountA(format((amountB * rates[currencyA]) / rates[currencyB]));
    }
    setAmountB(amountB);
  }

  function handleCurrencyBChange(currencyB) {
    if (amountB !== '') {
      setAmountA(format((amountB * rates[currencyA]) / rates[currencyB]));
    }
    setCurrencyB(currencyB);
  }

  const onButtonChange = () => {
    setCurrencyA(currencyB);
    setCurrencyB(currencyA);
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
          onCurrencyChange={handleCurrencyAChange}
          currencies={Object.keys(rates)}
          amount={amountA}
          currency={currencyA}
          name="sale"
        />
        <Button onButtonChange={onButtonChange} />
        <CurrencyInput
          autocomplete="off"
          onAmountChange={handleAmountBChange}
          onCurrencyChange={handleCurrencyBChange}
          currencies={Object.keys(rates)}
          amount={amountB}
          currency={currencyB}
          name="buy"
        />
        {isLoadding && (
          <PropagateLoader color={'#3f51b5'} loading={isLoadding} size={15} />
        )}
      </Container>
    </>
  );
};
