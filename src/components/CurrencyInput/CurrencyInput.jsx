import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import './currencyInput.css';

export const CurrencyInput = props => {
  return (
    <div className="group">
      <input
        type="text"
        name="amount"
        required
        id={nanoid()}
        value={props.amount}
        onChange={event =>
          props.onAmountChange(event.target.value.replace(/\D+/g, ''))
        }
      />
      <select
        value={props.currency}
        onChange={ev => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies?.map(currency => (
          <option key={nanoid()} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
