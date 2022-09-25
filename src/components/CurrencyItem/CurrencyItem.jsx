import PropTypes from 'prop-types';
import { Item, Name, Value } from './CurrencyItem.styled';

const CurrencyItem = ({ name, value }) => {
  return (
    <>
      <Item>
        <Name> {name} </Name>
        <Value> {value} </Value>
      </Item>
    </>
  );
};

export default CurrencyItem;

CurrencyItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};
