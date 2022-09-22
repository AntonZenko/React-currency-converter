import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const Calculate = ({ currencyList }) => {
  function calc() {
    let c = { USD: '78', EUR: '85.60', RUB: '1' }; // Устанавливаем курс валют

    let val = document.getElementById('val'); // Получаем элемент ввода данных
    let currency1 = document.getElementById('cur1'); // Получаем первый селект
    let currency2 = document.getElementById('cur2'); // Получаем второй селект
    let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
    function summ() {
      // Делаем функцию
      let z = 0;
      if (currency1.value === currency2.value) {
        // Если оба значения в селектах равны
        result.innerText = val.value; // То просто вписываем данные из поля ввода
      } else {
        if (currency1.value !== 'RUB') {
          // Если не равны рублю, то
          z = val.value * c[currency1.value]; // Переводим сумму в рубли
          result.innerHTML = Math.ceil((z / c[currency2.value]) * 100) / 100; // Делим на курс и округляем до сотых
        } else {
          // Если не равны
          result.innerHTML =
            Math.ceil(val.value * c[currency2.value] * 100) / 100; // Умножаем на курс и округляем до сотых
        }
      }
    }
    val.oninput = function () {
      // При вводе данных в поле вызываем функцию.
      summ();
    };
    currency1.onchange = function () {
      // При смене первого селекта вызываем функцию.
      summ();
    };
    currency2.onchange = function () {
      // При смене второго селекта вызываем функцию.
      summ();
    };
  }

  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [result, setResult] = useState('');

  const amountAId = nanoid();
  const amountBId = nanoid();

  useEffect(() => {
    const result = amountA * amountB * 0.01;
    setResult(result.toFixed(2));
  }, [amountA, amountB]);

  const handleChange = event => {
    const { name } = event.currentTarget;
    const value = event.target.value.replace(/\D+/g, '');

    switch (name) {
      case 'amountA':
        if (amountA !== value) {
          setAmountA(value);
        }
        break;

      case 'amountB':
        if (amountB !== value) {
          setAmountB(value);
        }
        break;

      default:
        return;
    }
  };

  function makeOptions(arr) {
    let result = arr;
    return console.log(result);
  }
  // console.log(makeOptions(currencyList));
  makeOptions(currencyList);

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
          onChange={handleChange}
        />
        <select>
          <option key={nanoid()} value="UAH">
            UAH
          </option>
          <option key={nanoid()} value="EUR">
            EUR
          </option>
          <option key={nanoid()} value="RUR">
            RUR
          </option>
          <option key={nanoid()} value="BTC">
            BTC
          </option>
        </select>
        <input
          type="text"
          name="amountB"
          required
          id={amountBId}
          value={amountB}
          onChange={handleChange}
        />
        <select>
          <option key={nanoid()} value="USD">
            USD
          </option>
          <option key={nanoid()} value="EUR">
            EUR
          </option>
          <option key={nanoid()} value="RUR">
            RUR
          </option>
        </select>
        {/* <select>
          {currencyList?.map(({ ccy, base_ccy, buy, sale }, index) => (
            <option key={nanoid()} value={index}>
              {ccy}
            </option>
          ))}
        </select> */}
      </form>
    </>
  );
};
