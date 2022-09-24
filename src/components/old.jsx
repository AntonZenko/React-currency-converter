// import { useState, useEffect } from 'react';
// import { AppBar } from './AppBar/AppBar';
// // import { lazy, Suspense } from 'react';
// import { fetchCurrency } from './fetchService';
// import { Calculate } from './Calculate/Calculate';
// import CurrencyInput from './CurrencyInput/CurrencyInput';

// export const App = () => {
//   const [currencyList, setCurrencyList] = useState(null);
//   const [options, setOptions] = useState(null);

//   const [amount1, setAmount1] = useState(1);
//   const [amount2, setAmount2] = useState(1);
//   const [currency1, setCurrency1] = useState('USD');
//   const [currency2, setCurrency2] = useState('UAH');
//   const [rates, setRates] = useState([]);

//   useEffect(() => {
//     const getCurrency = async () => {
//       try {
//         const currency = await fetchCurrency();
//         setCurrencyList(currency);
//         setOptions(getSelectOptions(currency));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getCurrency();
//   }, []);

// const getSelectOptions = arr => {
//   const options = arr
//     ?.map(item => item.ccy)
//     .concat(arr?.map(item => item.base_ccy))
//     .filter((item, index, array) => array.indexOf(item) === index);
//   return options;
// };

//   function format(number) {
//     return number.toFixed(4);
//   }

//   function handleAmount1Change(amount1) {
//     setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
//     setAmount1(amount1);
//   }

//   function handleCurrency1Change(currency1) {
//     setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
//     setCurrency1(currency1);
//   }

//   function handleAmount2Change(amount2) {
//     setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
//     setAmount2(amount2);
//   }

//   function handleCurrency2Change(currency2) {
//     setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
//     setCurrency2(currency2);
//   }

// const optionsA = options?.filter(item => item !== currency2);
// const optionsB = options?.filter(item => item !== currency1);

//   return (
//     <div>
//       <AppBar currencyList={currencyList} />
//       <div>
//         <h1>Currency Converter</h1>
//         <CurrencyInput
//           onAmountChange={handleAmount1Change}
//           onCurrencyChange={handleCurrency1Change}
//           currencies={optionsA}
//           amount={amount1}
//           currency={currency1}
//         />
//         <CurrencyInput
//           onAmountChange={handleAmount2Change}
//           onCurrencyChange={handleCurrency2Change}
//           currencies={optionsB}
//           amount={amount2}
//           currency={currency2}
//         />
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const Calculate = ({ currencyList, options }) => {
  // const initialValueA = options.find(item => item === 'USD');
  // const initialValueB = options.find(item => item === 'UAH');

  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');

  // console.log(amountA, amountB);

  const [selectedA, setSelectedA] = useState('USD');
  const [selectedB, setSelectedB] = useState('UAH');
  // console.log(selectedA, selectedB);

  const [result, setResult] = useState('');

  const optionsA = options.filter(item => item !== selectedB);
  const optionsB = options.filter(item => item !== selectedA);

  const amountAId = nanoid();
  const amountBId = nanoid();

  const selectAId = nanoid();
  const selectBId = nanoid();

  useEffect(() => {
    const result = amountA * amountB;
    setResult(result.toFixed(2));
  }, [amountA, amountB]);

  const currencyRateItem = currencyList.find(
    item => item.ccy === selectedB || item.base_ccy === selectedB
  );
  const currencyBuyRate = currencyRateItem.buy;
  const currencySaleRate = currencyRateItem.buy;

  const handleInputChange = event => {
    const { name } = event.currentTarget;
    const value = event.target.value.replace(/\D+/g, '');

    switch (name) {
      case 'amountA':
        if (amountA !== value) {
          setAmountA(value);
          setAmountB(value * currencyBuyRate);
        }
        break;

      case 'amountB':
        if (amountB !== value) {
          setAmountB(value);
          setAmountA(value / currencySaleRate);
        }
        break;

      default:
        return;
    }
  };

  const handleSelectChange = event => {
    const { id, value } = event.target;
    switch (id) {
      case selectAId:
        if (selectedA !== value) {
          setSelectedA(value);
        }
        break;

      case selectBId:
        if (selectedB !== value) {
          setSelectedB(value);
        }
        break;

      default:
        return;
    }
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={null}>
        <input
          type="text"
          name="amountA"
          required
          id={amountAId}
          value={amountA}
          onChange={handleInputChange}
        />
        <select id={selectAId} value={selectedA} onChange={handleSelectChange}>
          {optionsA.map(option => (
            <option key={nanoid()} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="amountB"
          required
          id={amountBId}
          value={amountB}
          onChange={handleInputChange}
        />

        <select id={selectBId} value={selectedB} onChange={handleSelectChange}>
          {optionsB.map(option => (
            <option key={nanoid()} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
