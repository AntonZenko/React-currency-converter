import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Box, Label, Input, Select, Option } from './CurrencyInput.styled';

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
  name,
}) => {
  const id = nanoid();

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Input
        type="text"
        name="amount"
        required
        id={id}
        value={amount}
        onChange={event =>
          onAmountChange(event.target.value.replace(/\D+/g, ''))
        }
      />
      <Select
        value={currency}
        onChange={event => onCurrencyChange(event.target.value)}
      >
        {currencies?.map(currency => (
          <Option key={nanoid()} value={currency}>
            {currency}
          </Option>
        ))}
      </Select>
    </Box>
  );
};
export default CurrencyInput;
CurrencyInput.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
